import { NextPage } from 'next'
import { ErrorProps } from 'next/error'
import { Page } from '../components/Page'

const ErrorPage: NextPage<ErrorProps> = (props) => {
  const { title, statusCode } = props

  return (
    <Page
      title={`${title || 'Error'}`}
      displayTitle={`Error ${statusCode}`}
      backPath="/"
    >
      <code>{title}</code>
    </Page>
  )
}

export default ErrorPage
