import { useHistory } from 'react-router'
import { useUserContext } from 'shared/service/user'

export const useAuthenticate = () => {
  const history = useHistory()
  const [user] = useUserContext()
  
  if (!user) history.push('/login')
  else history.push('')
}
