import PageSection from '../../components/PageSection'
import Title from '../../components/Title'
import WindowContainer from '../../components/WindowContainer'
import useUser from '../../hooks/useUser'
import Portade from './Components/Portade'
import UserRegistration from './Components/UserRegistration'

const Home = () => {
  const { user } = useUser()
  return <>{user.username ? <Portade /> : <UserRegistration />}</>
}

export default Home
