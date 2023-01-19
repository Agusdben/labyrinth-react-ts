import useLabyrinth from '../../hooks/useLabyrinth'
import usePlayer from '../../hooks/usePlayer'
import { Dimension } from '../../types'
import GameControls from '../GameControls/intex'
import { LabyrinthLeyend } from '../LabyrinthLeyend'

const Labyrinth = ({ width, height }: Dimension) => {
  const { canvasRef } = useLabyrinth({ width, height })
  const { handlePlayerMove } = usePlayer()

  return (
    <div className='flex flex-col gap-4'>
      <h2>Level: {}</h2>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className={`w-[${width}px] h-[${height}px]`}
      />
      <LabyrinthLeyend />
      <GameControls handlePlayerMove={handlePlayerMove} />
    </div>
  )
}

export default Labyrinth
