import React from 'react'
import { ErrorBoundary } from 'shared/utils/errorBoundary'

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import { Layout } from 'shared/containers'

export default function Index() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </ErrorBoundary>
  )
}
