import { NextPage } from 'next'
import { Page } from '../../components/Page'
import { Gallery, GalleryEntry } from '../../components/Gallery'

const WorkGalleryPage: NextPage = () => {
  const projects: GalleryEntry[] = [
    {
      title: 'Vanillo',
      thumbnail: '/vanillo.png',
      year: '2019',
      slug: 'vanillo',
    },
    {
      title: 'Yet Another SMP',
      thumbnail: '/yasmp.png',
      year: '2021',
      slug: 'yasmp',
    },
  ]

  return (
    <Page title="Work">
      <Gallery entries={projects} />
    </Page>
  )
}

export default WorkGalleryPage
