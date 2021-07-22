import React from 'react'
import { ErrorBoundary } from 'shared/utils/errorBoundary'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Authenticate from 'Auth'
import { Layout } from 'shared/containers'

export default function Index() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Authenticate />
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
