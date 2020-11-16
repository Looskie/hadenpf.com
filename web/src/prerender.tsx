import * as fs from 'fs'
import * as path from 'path'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as mkdirp from 'mkdirp'
import * as typescript from 'typescript'

import { Helmet } from 'react-helmet'

const inputDir = path.resolve(__dirname, '../src/pages')
const renderDir = path.resolve(__dirname, '../dist')
const assetDir = path.resolve(__dirname, '../public')

// path within web, not on disk
const mainScriptPath = '/assets/0.js'

const routes: string[] = []

readdirSyncRecurse(inputDir).forEach((filePath) => {
  // get extension-less filename
  const nameArray = path.basename(filePath).split('.')
  const ext = nameArray.pop() // remove original extension

  if (!ext || !['tsx', 'jsx', 'ts', 'js'].includes(ext)) return

  const filename = nameArray.join('.')

  routes.push(path.join(path.dirname(filePath), filename))
})

if (process.argv.includes('--pre')) {
  fs.writeFileSync(
    path.resolve(__dirname, '../.routes.json'),
    JSON.stringify(routes)
  )
  process.exit(0)
}

import AppContainer from './app'

for (const route of routes) {
  console.log(`Generating ${route}...`)

  // get extension-less filename
  const filename = path.basename(route)
  const renderPath = path.resolve(renderDir, `${filename}.html`)

  const content = ReactDOMServer.renderToStaticMarkup(
    <AppContainer location={route} />
  )
  const helmet = Helmet.renderStatic()

  try {
    // recursively make all necessary directories
    mkdirp.sync(path.dirname(renderPath))

    fs.writeFileSync(
      renderPath,
      `\
<!DOCTYPE html>
<html\
${helmet.htmlAttributes.toString() || ''}\
>
<head>
${helmet.title.toString() || ''}\
${helmet.meta.toString() || ''}\
${helmet.link.toString() || ''}
</head>
<body\
${helmet.bodyAttributes.toString() || ''}\
>
<div id="root">\
${content}\
</div>
<script src="${mainScriptPath}"></script>
</body>
</html>`
    )
  } catch (err) {
    console.log(`Could not write ${filename}`, err)
    process.exit(1)
  }

  console.log(`Saved to ${filename}.html\n`)
}

console.log('Copying static assets...')

readdirSyncRecurse(assetDir).forEach((filePath) => {
  console.log(`Copying ${filePath}...`)

  const assetPath = path.resolve(assetDir, filePath)

  try {
    fs.copyFileSync(assetPath, path.resolve(renderDir, 'assets', filePath))
  } catch (err) {
    console.log(`Could not copy static asset ${filePath}`, err)
    process.exit(1)
  }

  console.log(`Saved to ${filePath}`)
})

function readdirSyncRecurse(directory: string): string[] {
  const output: string[] = []
  const items = fs.readdirSync(directory)

  for (const item of items) {
    const itemPath = path.resolve(directory, item)
    const stat = fs.statSync(itemPath)

    if (stat?.isDirectory()) {
      const subItems = readdirSyncRecurse(itemPath)

      for (const subItem of subItems) {
        output.push(path.join(item, subItem))
      }
    } else {
      output.push(item)
    }
  }

  return output
}
