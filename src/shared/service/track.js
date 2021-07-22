import React from 'react'

const TrackContext = React.createContext()

const trackInitialState = {
  track: null,
  isPaused: true,
}

function trackReducer(state, action) {
  switch(action.type) {
    case 'SET_TRACK':
      return {
        ...state,
        track: action.payload,
        isPaused: false,
      }
    case 'SET_PAUSED':
      return {
        ...state,
        isPaused: !state.isPaused,
      }
    default:
      throw new Error('Unsupported action type')
  }
}

export function TrackProvider({children}) {
  const track = React.useReducer(trackReducer, trackInitialState)
  return (
    <TrackContext.Provider value={track}>
      {children}
    </TrackContext.Provider>
  )
}

export function useTrackContext() {
  const context = React.useContext(TrackContext)
  if (!context) throw new Error('useUserContext must be used within TrackProvider')
  return context
}
