import useUser from '../../hooks/useUser'
import UserRegistration from '../UserRegistration'
import WindowContainer from '../WindowContainer'

const WelcomePortade = () => {
  const { user } = useUser()
  return (
    <WindowContainer>
      <h2>TITLE OF GAME</h2>
      {user.username ? <></> : <UserRegistration />}
    </WindowContainer>
  )
}

export default WelcomePortade
