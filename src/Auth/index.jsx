import { useStateValue, useAuthenticate } from 'shared/hooks'

export default function Authenticate() {
  const [{ user }, dispatch] = useStateValue()

  useAuthenticate(user, dispatch)

  return null
}
