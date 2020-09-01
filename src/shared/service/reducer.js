import * as type from 'shared/constants/types'

export const initialState = {
  user: null,
  authenticated: false,

  categories: [],
  playlists: [],
  playlist: null,
  tracks: [],
  cachedTracks: {},

  track: null,
  isPaused: true,
}

const reducer = (state, action) => {
  console.log('STATE: ', state)
  console.log('ACTION: ', action)

  switch (action.type) {
    // USER
    case type.SET_USER:
      return {
        ...state,
        user: action.payload,
      }

    case type.SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      }

    // DATA
    case type.SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
      }

    case type.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }

    case type.SET_CATEGORY:
      return {
        ...state,
        categories: [action.payload],
      }

    case type.SET_PLAYLISTS:
      return {
        ...state,
        playlists: [action.payload, ...state.playlists],
      }

    case type.SET_PLAYLIST:
      return {
        ...state,
        playlist: action.payload,
      }

    case type.CACHE_TRACKS:
      return {
        ...state,
        cachedTracks: {
          [action.payload.url]: action.payload.data,
          ...state.cachedTracks,
        },
      }

    // PLAYER
    case type.SET_TRACK:
      return {
        ...state,
        track: action.payload,
      }

    case type.SET_PAUSED:
      return {
        ...state,
        isPaused: !state.isPaused,
      }

    default:
      return state
  }
}

export default reducer
