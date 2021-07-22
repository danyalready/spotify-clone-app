import React from 'react'
import { Switch, Route } from 'react-router-dom'

// const Login = lazy(() => import('shared/pages/login.page'))
// const Home = lazy(() => import('shared/pages/home.page'))
// const Category = lazy(() => import('shared/pages/category.page'))
// const Playlist = lazy(() => import('shared/pages/playlist.page'))
import Home from 'shared/pages/home.page'
import Login from 'shared/pages/login.page'
import Category from 'shared/pages/category.page'
import Playlist from 'shared/pages/playlist.page'

const routes = [
  {path: '/login', component: Login},
  {path: '/', component: Home},
  {path: '/:category', component: Category},
  {path: '/:category/:playlist_id', component: Playlist},
]

export default function Routes() {
  const routeComponents = routes.map((route, index) =>
    <Route exact path={route.path} component={route.component} key={index} />)

  return <Switch>{routeComponents}</Switch>
}
