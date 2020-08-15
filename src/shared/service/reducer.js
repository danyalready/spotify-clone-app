import * as type from 'shared/constants/types'

export const initialState = {
  loggedIn: false,
  categories: [],
  playlists: [],
}

const reducer = (state, action) => {
  console.log('STATE: ', state)
  console.log('ACTION: ', action)

  switch (action.type) {
    case type.SET_AUTHENTICATED:
      return {
        ...state,
        loggedIn: true,
      }

    case type.SET_UNAUTHENTICATED:
      return {
        ...state,
        loggedIn: false,
      }

    case type.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }

    case type.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload,
      }

    default:
      return state
  }
}

export default reducer
