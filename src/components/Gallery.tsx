import styles from '../styles/Gallery.module.scss'
import React from 'react'
import Link from 'next/link'
import * as ProjectImages from '../images/projects'

export type GalleryEntry = {
  thumbnail: string
  title: string
  year: string
  slug: string

  large?: boolean
}

interface GalleryProps {
  entries: Record<string, GalleryEntry>
}

export const Gallery: React.FC<GalleryProps> = (props) => {
  const { entries: entryList } = props

  const entries: GalleryEntry[] = []
  for (const slug in entryList)
    if (entryList.hasOwnProperty(slug))
      entries.push({
        slug,
        thumbnail: ProjectImages[slug] || '',
        ...entryList[slug],
      })

  return (
    <div className={styles.GalleryContainer}>
      {entries.map((data, i) => (
        <Link key={i} href={'/work/[slug]'} as={`/work/${data.slug}`}>
          <a
            className={[styles.GalleryItem, data.large ? styles.Wide : ''].join(
              ' '
            )}
          >
            {/* no alt because the meta is on the overlay div */}
            <img src={data.thumbnail} alt="" />
            <div className={styles.ItemOverlayContainer}>
              <div className={styles.ItemOverlay}>{data.title}</div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}
