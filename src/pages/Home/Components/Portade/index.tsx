import { useNavigate } from 'react-router-dom'
import GameTitle from '../../../../components/GameTitle'
import PageSection from '../../../../components/PageSection'
import Subtitle from '../../../../components/Subtitle'
import Title from '../../../../components/Title'
import WindowContainer from '../../../../components/WindowContainer'
import useUser from '../../../../hooks/useUser'

const Portade = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  return (
    <PageSection>
      <Title>
        <GameTitle />
      </Title>
      <WindowContainer>
        <div
          className='h-full w-full flex flex-col text-center gap-4 relative'
          onClick={() => navigate('/menu')}
        >
          <Subtitle>
            <p>Welcome {user.username}</p>
          </Subtitle>
          <p className='mt-auto animate-bounce transition-transform duration-[5000ms]'>
            Click to continue
          </p>
          <small className='absolute bottom-1 right-1'>v1.0</small>
        </div>
      </WindowContainer>
    </PageSection>
  )
}

export default Portade
