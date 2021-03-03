import React from 'react'
import styles from '../styles/Sidebar.module.scss'
import Link from 'next/link'
import { EmailIcon, GitHubIcon, TwitterIcon } from '../icons'

interface SidebarProps {
  plainLine?: boolean

  backPath?: string
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { plainLine, backPath } = props

  return (
    <aside className={styles.SidebarContainer}>
      <div className={styles.NameSection}>
        <Link href={'/'} passHref>
          <a>
            <h1>Haden Fletcher</h1>
          </a>
        </Link>

        <div className={styles.LineSection}>
          {!backPath && <hr className={plainLine ? styles.PlainBorder : ''} />}

          {backPath && (
            <Link href={backPath}>
              <a className={styles.BackLink}>&larr;</a>
            </Link>
          )}
        </div>
      </div>
      <div className={styles.SocialSection}>
        <a href="https://github.com/hadenpf">
          <GitHubIcon />
        </a>
        <a href="https://twitter.com/hadenfletcher">
          <TwitterIcon />
        </a>
        <a href="mailto:haden@hadenfletcher.com">
          <EmailIcon />
        </a>
      </div>
      <nav className={styles.NavSection}>
        <ul>
          <li>
            <Link href={'/'} passHref>
              <a>
                <span>About</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={'/work'} passHref>
              <a>
                <span>Work</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={'/contact'} passHref>
              <a>
                <span>Contact</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
