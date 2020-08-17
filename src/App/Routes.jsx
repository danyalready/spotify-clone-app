import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Login = lazy(() => import('shared/pages/login.page'))
const Home = lazy(() => import('shared/pages/home.page'))
const Category = lazy(() => import('shared/pages/category.page'))
const Playlist = lazy(() => import('shared/pages/playlist.page'))

export default function Routes() {
  return (
    <Switch>
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
        path='/:category'
        render={() => (
          <Suspense fallback={<p>Loading ...</p>}>
            <Category />
          </Suspense>
        )}
      />
      <Route
        exact
        strict
        path='/:category/:playlist_id'
        render={() => (
          <Suspense fallback={<p>Loading ...</p>}>
            <Playlist />
          </Suspense>
        )}
      />
    </Switch>
  )
}
