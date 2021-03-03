import React from 'react'
import styles from '../styles/Layout.module.scss'
import Head from 'next/head'
import { Sidebar } from './Sidebar'
import Link from 'next/link'

interface PageProps {
  title?: string
  titleOverride?: string
  displayTitle?: string

  backPath?: string
}

export const Page: React.FC<PageProps> = (props) => {
  const {
    title,
    // title template
    // taking care to use an em dash here :)
    titleOverride = `${title} — Haden Fletcher`,
    displayTitle = title,

    backPath = null,
  } = props

  return (
    <div className={styles.PageContainer}>
      <Head>
        <title>{titleOverride}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar backPath={backPath} />

      <main className={styles.MainSection}>
        <header>
          <h1>{displayTitle}</h1>
        </header>

        {props.children}
      </main>
    </div>
  )
}
