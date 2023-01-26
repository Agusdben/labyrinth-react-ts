import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageSection from '../../components/PageSection'
import Title from '../../components/Title'
import useGame from '../../hooks/useGame'
import useLevel from '../../hooks/useLevel'
import useOptions from '../../hooks/useOptions'
import usePlayer from '../../hooks/usePlayer'
import useSaveGame from '../../hooks/useSaveGame'
import GameControls from './components/GameControls'
import { LabyrinthLeyend } from './components/LabyrinthLeyend'
import LeaveButton from './components/LeaveButton'
import ModalLabyrinthCompleted from './components/ModalLabyrinthCompleted'

const Labyrinth = () => {
  const { level } = useParams()
  const currentLevel = Number(level)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { resolution } = useOptions()
  const { getSavedGame } = useSaveGame()
  const { canvasRef } = useGame()
  const { setLevel } = useLevel()
  const { handlePlayerMove } = usePlayer()

  const cancelLabyrinth = () => {
    navigate('/menu/levels')
  }

  useEffect(() => {
    setIsLoading(true)

    const lastLevelCompleted = getSavedGame()
    if (!currentLevel) {
      cancelLabyrinth()
      return
    }
    if (currentLevel > lastLevelCompleted + 1) {
      cancelLabyrinth()
      return
    }

    setLevel(currentLevel)

    setIsLoading(false)
  }, [level])

  return (
    <PageSection>
      {!isLoading ? (
        <>
          <header className='flex items-center justify-between'>
            <Title>Level: {currentLevel}</Title>
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
        </>
      ) : null}
    </PageSection>
  )
}

export default Labyrinth
