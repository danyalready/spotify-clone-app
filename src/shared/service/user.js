import React from 'react'
import { removeAuthToken } from 'shared/utils/authToken'

const UserContext = React.createContext()

export function UserProvider({children}) {
  const authenticated = React.useState(false)
  return (
    <UserContext.Provider value={authenticated}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const context = React.useContext(UserContext)
  if (!context) throw new Error('useUserContext must be used within UserProvider')
  return context
}

export function logOut(dispatch) {
  dispatch(false)
  removeAuthToken()
}

export function logIn(dispatch) {
  dispatch(true)
}
