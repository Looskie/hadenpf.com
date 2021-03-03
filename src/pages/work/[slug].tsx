import { GetServerSideProps, NextPage } from 'next'
import { Page } from '../../components/Page'
import { GalleryEntry } from '../../components/Gallery'
import yaml from 'js-yaml'
import WorkGalleryPage from './index'

type WorkPageProps = {
  data?: GalleryEntry
}

const WorkPage: NextPage<WorkPageProps> = (props) => {
  const { data } = props

  if (!data) return <WorkGalleryPage />

  return (
    <Page backPath="/work" title={data.title}>
      <h1>WIP!</h1>
    </Page>
  )
}

export default WorkPage

export const getServerSideProps: GetServerSideProps<WorkPageProps> = async ({
  params: { slug = '' },
}) => {
  // a lil type coercion never hurt :)
  slug = slug.toString()

  let data: GalleryEntry

  try {
    const filePath = (await import('path')).resolve(`src/data/projects.yml`)

    if ((await import('fs')).existsSync(filePath)) {
      const raw = (await import('fs')).readFileSync(filePath, 'utf-8')
      const entries = yaml.load(raw) as Record<string, GalleryEntry>

      if (entries[slug]) {
        data = entries[slug]
      }
    }
  } catch (err) {
    console.log({ err })
    return {
      props: {},
      redirect: '/work',
    }
  }

  return {
    props: {
      data: data ?? null,
    },
  }
}
