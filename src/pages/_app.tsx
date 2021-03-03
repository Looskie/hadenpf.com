import '../styles/globals.scss'
import { AppProps } from 'next/app'

const AppContainer = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default AppContainer
