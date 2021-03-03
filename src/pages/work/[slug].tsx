import { GetServerSideProps, GetStaticPaths, NextPage } from 'next'
import { Page } from '../../components/Page'
import { GalleryEntry } from '../../components/Gallery'
import WorkGalleryPage from './index'
import { loadProjects } from '../../utils/data'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/pages/Work.module.scss'

type WorkPageProps = {
  data?: GalleryEntry
}

const WorkPage: NextPage<WorkPageProps> = (props) => {
  const { data } = props

  if (!data) return <WorkGalleryPage />

  return (
    <Page
      backPath="/work"
      title={data.title}
      displayTitle={`${data.title} (${data.year})`}
    >
      <ReactMarkdown className={styles.ProjectContent}>
        {data.markdown}
      </ReactMarkdown>
    </Page>
  )
}

export default WorkPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = []

  const entries = await loadProjects()
  for (const entry in entries) paths.push({ params: { slug: entry } })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetServerSideProps<WorkPageProps> = async ({
  params: { slug = '' },
}) => {
  // a lil type coercion never hurt :)
  slug = slug.toString()

  let data: GalleryEntry
  const entries = await loadProjects()
  if (entries[slug]) data = entries[slug]

  return {
    props: {
      data: data ?? null,
    },
  }
}
