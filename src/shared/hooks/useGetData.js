import { useEffect } from 'react'
import { useStateValue } from 'shared/hooks'
import { useHistory } from 'react-router-dom'
import api from 'shared/utils/api'
import * as types from 'shared/constants/types'
import { removeAuthToken } from 'shared/utils/authToken'

export const useGetData = (url, condition, type, dependency) => {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue()
  const history = useHistory()

  useEffect(() => {
    if (condition) {
      api
        .get(url)
        .then((data) => {
          switch (type) {
            case types.SET_CATEGORIES:
              dispatch({ type, payload: data.data.categories.items })
              break
            case types.SET_CATEGORY:
              dispatch({ type, payload: data.data })
              break
            case types.SET_PLAYLISTS:
              dispatch({ type, payload: data.data.playlists })
              break
            case types.SET_PLAYLIST:
              dispatch({ type, payload: data.data })
              break
            default:
              return data
          }
        })
        .catch((err) => {
          if (err.request.status === 401) {
            removeAuthToken()
            dispatch({ type: types.SET_UNAUTHENTICATED })
            history.push('/login')
          }
        })
    }

    // eslint-disable-next-line
  }, [dependency])
}
