import { useNavigate } from 'react-router-dom'
import Subtitle from '../../../../components/Subtitle'
import Title from '../../../../components/Title'
import useUser from '../../../../hooks/useUser'

const Portade = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  return (
    <div
      className='h-full w-full flex flex-col text-center gap-4'
      onClick={() => navigate('/menu')}
    >
      <Title>LABYRINTH</Title>
      <Subtitle>
        <p>Welcome {user.username}</p>
      </Subtitle>
      <p className='mt-auto animate-bounce transition-transform duration-[5000ms]'>
        Click to continue
      </p>
    </div>
  )
}

export default Portade
