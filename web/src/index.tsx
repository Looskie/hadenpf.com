import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'

import App from './app'

const root = document.getElementById('root')

if (root?.hasChildNodes()) {
  // prerendered
  ReactDOM.hydrate(<App />, root)
} else {
  ReactDOM.render(<App />, root)
}

const helmet = <Helmet defaultTitle="hadenpf" titleTemplate="%s - hadenpf" />
