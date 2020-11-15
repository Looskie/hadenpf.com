import * as fs from 'fs'
import * as path from 'path'
import * as React from 'react'
import * as ReactDOM from 'react-dom/server'
import * as mkdirp from 'mkdirp'

const inputDir = path.resolve(__dirname, '../src/app')
const buildDir = path.resolve(__dirname, '../build/app')
const renderDir = path.resolve(__dirname, '../dist')
const assetDir = path.resolve(__dirname, '../public')

// path within web, not on disk
const mainScriptPath = '/main.js'

if (!fs.existsSync(buildDir)) {
  console.log('Could not find built files. Please run `yarn build` or `tsc`.')
  process.exit(1)
}

readdirSyncRecurse(inputDir).forEach((filePath) => {
  console.log(`Generating ${filePath}...`)

  // get extension-less filename
  const nameArray = path.basename(filePath).split('.')
  nameArray.pop() // remove original extension
  const filename = nameArray.join('.')

  const renderPath = path.resolve(renderDir, `${filename}.html`)

  const content = ReactDOM.renderToStaticMarkup(
    React.createElement(
      require(path.resolve(buildDir, `${filename}.js`)).default
    )
  )

  try {
    // recursively make all necessary directories
    mkdirp.sync(path.dirname(renderPath))

    fs.writeFileSync(
      renderPath,
      `\
<!DOCTYPE html>
<html>
		<head>
			<title>hadenpf</title>
		</head>
		<body>
			<div id="root">
				${content}
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
})

console.log('Copying static assets...')

readdirSyncRecurse(assetDir).forEach((filePath) => {
  console.log(`Copying ${filePath}...`)

  const assetPath = path.resolve(assetDir, filePath)

  try {
    fs.copyFileSync(assetPath, path.resolve(renderDir, filePath))
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
