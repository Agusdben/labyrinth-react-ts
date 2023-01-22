import PageSection from '../../components/PageSection'
import Title from '../../components/Title'
import WindowContainer from '../../components/WindowContainer'
import useUser from '../../hooks/useUser'
import Portade from './Components/Portade'
import UserRegistration from './Components/UserRegistration'

const Home = () => {
  const { user } = useUser()
  return (
    <PageSection>
      <Title>
        <p className='text-center'></p>
      </Title>
      <WindowContainer>
        {user.username ? <Portade /> : <UserRegistration />}
      </WindowContainer>
    </PageSection>
  )
}

export default Home
