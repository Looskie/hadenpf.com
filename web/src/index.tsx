import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './app'

const root = document.getElementById('root')

if (root?.hasChildNodes()) {
  // prerendered
  ReactDOM.hydrate(<App />, root)
} else {
  ReactDOM.render(<App />, root)
}
