import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
const Home = lazy(() => import('shared/pages/home.page'))
const Login = lazy(() => import('shared/pages/login.page'))

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        strict
        path='/'
        render={() => (
          <Suspense fallback={<p>Loading ...</p>}>
            <Home />
          </Suspense>
        )}
      />
      <Route
        exact
        strict
        path='/login'
        render={() => (
          <Suspense fallback={<p>Loading ...</p>}>
            <Login />
          </Suspense>
        )}
      />
    </Switch>
  )
}
