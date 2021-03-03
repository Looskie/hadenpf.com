import { GetServerSideProps, NextPage } from 'next'
import { Page } from '../../components/Page'
import { Gallery, GalleryEntry } from '../../components/Gallery'
import yaml from 'js-yaml'

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

export const getServerSideProps: GetServerSideProps<WorkGalleryPageProps> = async ({}) => {
  let data: Record<string, GalleryEntry>

  try {
    const filePath = (await import('path')).resolve(`src/data/projects.yml`)

    if ((await import('fs')).existsSync(filePath)) {
      const raw = (await import('fs')).readFileSync(filePath, 'utf-8')
      data = yaml.load(raw) as Record<string, GalleryEntry>
    }
  } catch (err) {
    console.log({ err })
    return {
      props: {},
      redirect: '/',
    }
  }

  return {
    props: {
      data: data ?? null,
    },
  }
}
