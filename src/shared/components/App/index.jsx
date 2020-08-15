import React, { useEffect } from 'react'
import { useStateValue } from 'shared/hooks'
import { ErrorBoundary } from 'shared/utils/errorBoundary'
import { removeAuthToken } from 'shared/utils/authToken'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import { Layout } from 'shared/containers'

export default function Index() {
  const [{ loggedIn }] = useStateValue()

  useEffect(() => {
    if (!loggedIn) {
      removeAuthToken()
    }
  }, [loggedIn])

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
