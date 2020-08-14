import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getAuthToken, storeAuthToken } from 'shared/utils/authToken'
import { getTokenFromResponse } from 'shared/service/spotify'

import SpotifyWebAPI from 'spotify-web-api-js'
const spotify = new SpotifyWebAPI()

export default function Home() {
  const history = useHistory()

  useEffect(() => {
    let token = getAuthToken()

    // Checking for the auth token ...
    if (!token) {
      token = getTokenFromResponse().access_token

      // Clearing the hash
      window.location.hash = ''

      if (!token) {
        return history.push('/login')
      }

      storeAuthToken(token)
    }

    // Connecting to the sporify ...
    spotify.setAccessToken(token)
    // Getting account credentials ...
    spotify
      .getMe()
      .then((user) => console.log('User: ', user))
      .catch((err) => console.log('ERROR: ', err))

    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <h1>Home page.</h1>
    </div>
  )
}
