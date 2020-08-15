import { useEffect } from 'react'
import { getTokenFromResponse } from 'shared/service/spotify'
import { useHistory } from 'react-router-dom'
import * as types from 'shared/constants/types'
import {
  getAuthToken,
  storeAuthToken,
  removeAuthToken,
} from 'shared/utils/authToken'

export const useAuthenticate = (loggedIn, dispatch) => {
  const history = useHistory()

  useEffect(() => {
    if (!getAuthToken()) {
      const token = getTokenFromResponse().access_token

      if (!token) {
        history.push('/login')
      } else {
        window.location.hash = ''
        storeAuthToken(token)
        dispatch({ type: types.SET_AUTHENTICATED })
      }
    }

    //  TODO: Send request to spotify server to get token validation message

    // eslint-disable-next-line
  }, [loggedIn])
}
