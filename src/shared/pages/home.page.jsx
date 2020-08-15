import React, { useEffect } from 'react'
import { useAuthenticate, useStateValue } from 'shared/hooks'
import api from 'shared/utils/api'
import * as types from 'shared/constants/types'
import { removeAuthToken } from 'shared/utils/authToken'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()
  const [{ loggedIn }, dispatch] = useStateValue()

  useAuthenticate(loggedIn, dispatch)

  useEffect(() => {
    api
      .get('/browse/categories')
      .then((data) =>
        dispatch({
          type: types.SET_CATEGORIES,
          payload: data.data.categories.items,
        })
      )
      .catch((err) => {
        console.log(err)
        // TODO: check for error type
        // removeAuthToken()
        // history.push('/login')
      })

    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <h1>Home page.</h1>
    </div>
  )
}
