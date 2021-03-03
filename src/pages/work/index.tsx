import { GetServerSideProps, NextPage } from 'next'
import { Page } from '../../components/Page'
import { Gallery, GalleryEntry } from '../../components/Gallery'
import { loadProjects } from '../../utils/data'

type WorkGalleryPageProps = {
  data?: Record<string, GalleryEntry>
}

const WorkGalleryPage: NextPage<WorkGalleryPageProps> = (props) => {
  const { data } = props

  if (!data) return <div>Unknown error rendering gallery</div>

  return (
    <Page title="Work">
      <Gallery entries={data} />
    </Page>
  )
}

export default WorkGalleryPage

export const getStaticProps: GetServerSideProps<WorkGalleryPageProps> = async ({}) => {
  const data = await loadProjects()

  return {
    props: {
      data: data ?? null,
    },
  }
}
