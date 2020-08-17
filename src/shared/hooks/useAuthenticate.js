import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getTokenFromResponse } from 'shared/service/spotify'
import {
  getAuthToken,
  storeAuthToken,
  removeAuthToken,
} from 'shared/utils/authToken'
import * as types from 'shared/constants/types'
import api from 'shared/utils/api'
import url from 'shared/constants/urls'

export const useAuthenticate = (user, dispatch) => {
  const history = useHistory()

  useEffect(() => {
    if (!getAuthToken()) {
      const token = getTokenFromResponse().access_token

      if (!token) {
        history.push('/login')
      } else {
        storeAuthToken(token)
        window.location.hash = ''
      }
    }

    // Gettin account credentials ...
    if (!user) {
      api
        .get(url.user)
        .then((data) => {
          dispatch({ type: types.SET_AUTHENTICATED })
          dispatch({ type: types.SET_USER, payload: data.data })
        })
        .catch((err) => {
          console.log('USER ERROR: ', err)
          dispatch({ type: types.SET_UNAUTHENTICATED })
          dispatch({ type: types.SET_USER, payload: null })
          removeAuthToken()
        })
    }

    // eslint-disable-next-line
  }, [user])
}
