import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import { getTokenFromResponse } from 'shared/service/spotify'
import { logOut, useUserContext } from 'shared/service/user'
import { getAuthToken, storeAuthToken } from 'shared/utils/authToken'
import { logIn } from 'shared/service/user'
import api from 'shared/utils/api'
import url from 'shared/constants/urls'

export const useAuthenticate = () => {
  const history = useHistory()
  const [user, dispatch] = useUserContext()
  const { pathname } = useLocation()

  useEffect(() => {
    if (!getAuthToken()) {
      const token = getTokenFromResponse().access_token

      if (!token) {
        logOut(dispatch)
        history.push('/login')
      } else {
        logIn(dispatch)
        storeAuthToken(token)
        history.push('')
      }
    }

    // NOTE: checks for token's expiration date by making get request
    function handleSuccess() {
      logIn(dispatch)
    }
    function handdleFailure() {
      logOut(dispatch)
    }
    if (!user) api.get(url.user).then(handleSuccess, handdleFailure)
    else if (pathname === '/login') history.push('')
  }, [user, pathname, dispatch, history])
}
