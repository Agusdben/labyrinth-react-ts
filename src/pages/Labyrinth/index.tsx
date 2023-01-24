import PageSection from '../../components/PageSection'
import Title from '../../components/Title'
import useGame from '../../hooks/useGame'
import useLevel from '../../hooks/useLevel'
import useOptions from '../../hooks/useOptions'
import usePlayer from '../../hooks/usePlayer'
import GameControls from './components/GameControls'
import { LabyrinthLeyend } from './components/LabyrinthLeyend'
import LeaveButton from './components/LeaveButton'
import ModalLabyrinthCompleted from './components/ModalLabyrinthCompleted'

const Labyrinth = () => {
  const { resolution } = useOptions()
  const { canvasRef } = useGame()
  const { level } = useLevel()
  const { handlePlayerMove } = usePlayer()

  return (
    <PageSection>
      <header className='flex items-center justify-between'>
        <Title>Level: {level + 1}</Title>
        <LeaveButton />
      </header>
      <canvas
        ref={canvasRef}
        width={resolution.width}
        height={resolution.height}
      />
      <LabyrinthLeyend />
      <GameControls handlePlayerMove={handlePlayerMove} />
      <ModalLabyrinthCompleted />
    </PageSection>
  )
}

export default Labyrinth
