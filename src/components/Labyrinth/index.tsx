import useGame from '../../hooks/useGame'
import useOptions from '../../hooks/useOptions'
import usePlayer from '../../hooks/usePlayer'
import GameControls from '../GameControls/intex'
import { LabyrinthLeyend } from '../LabyrinthLeyend'

const Labyrinth = () => {
  const { resolution } = useOptions()
  const { canvasRef } = useGame()
  const { handlePlayerMove } = usePlayer()

  return (
    <div className='flex flex-col gap-4'>
      <h2>Level: {}</h2>
      <canvas
        ref={canvasRef}
        className='outline outline-[10px] outline-black'
        width={resolution.width}
        height={resolution.height}
      />
      <LabyrinthLeyend />
      <GameControls handlePlayerMove={handlePlayerMove} />
    </div>
  )
}

export default Labyrinth
