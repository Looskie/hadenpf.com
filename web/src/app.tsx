import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Route, Router, Switch } from 'react-router-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

// get at build time from webpack
const routes: string[] = require('../.routes.json')

interface IAppProps {
  /**
   * for static/server rendering only
   */
  location?: string
  /**
   * for static/server rendering only
   */
  component?: React.ComponentType
}

const AppContainer: React.FC<IAppProps> = ({
  location: renderPath,
  component,
}) => {
  const isBrowser = !renderPath && typeof document !== 'undefined'

  return (
    <>
      <Helmet defaultTitle="haden fletcher" />
      <Router
        history={
          isBrowser
            ? createBrowserHistory()
            : createMemoryHistory({
                initialEntries: [`/${renderPath}`],
              })
        }
      >
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={`/${route}`}>
              {component && renderPath && route === renderPath
                ? React.createElement(component)
                : React.lazy(() => import(`./pages/${route}`))}
            </Route>
          ))}
        </Switch>
      </Router>
    </>
  )
}

export default AppContainer
