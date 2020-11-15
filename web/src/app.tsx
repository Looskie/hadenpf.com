import * as React from 'react'
import { Helmet } from 'react-helmet'

const AppContainer: React.FC = ({ children }) => {
  return (
    <>
      <Helmet defaultTitle="haden fletcher" />
      {children}
    </>
  )
}

export default AppContainer
