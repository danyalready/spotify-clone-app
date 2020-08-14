import { useContext } from 'react'
import { StateContext } from 'shared/service/context'

export const useStateValue = () => useContext(StateContext)
