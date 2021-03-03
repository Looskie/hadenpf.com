import styles from '../styles/Gallery.module.scss'
import React from 'react'
import Link from 'next/link'

export type GalleryEntry = {
  thumbnail: string
  title: string
  year: string
  slug: string
}

interface GalleryProps {
  entries: GalleryEntry[]
}

export const Gallery: React.FC<GalleryProps> = (props) => {
  const { entries } = props

  return (
    <div className={styles.GalleryContainer}>
      {entries.map((data, i) => (
        <React.Fragment key={i}>
          <Link href={'/work/[slug]'} as={`/work/${data.slug}`}>
            <a className={styles.GalleryItem}>
              {data.title}
              <img src={data.thumbnail} alt="" />
            </a>
          </Link>
        </React.Fragment>
      ))}
    </div>
  )
}
