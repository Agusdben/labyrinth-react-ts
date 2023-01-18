import useGame from '../../hooks/useGame'
import { PlayerMoveDirections } from '../../types'
import ArrowDown from '../ArrowDown'
import ArrowLeft from '../ArrowLeft'
import ArrowRight from '../ArrowRight'
import ArrowUp from '../ArrowUp'

interface Props {
  width: number
  height: number
}

const Game = ({ width, height }: Props) => {
  const { canvasRef, level, handlePlayerMove } = useGame({ width, height })

  const arrowColor = '#a1a1a1'

  return (
    <section className='m-auto flex flex-col gap-4'>
      <h2>Level: {level + 1}</h2>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className={`w-[${width}px] h-[${height}px] md:scale-150`}
      />
      <div className='flex flex-col items-center [&_button]:w-16'>
        <button onClick={() => handlePlayerMove(PlayerMoveDirections.up)}>
          <ArrowUp stroke={arrowColor} />
        </button>
        <div>
          <button onClick={() => handlePlayerMove(PlayerMoveDirections.left)}>
            <ArrowLeft stroke={arrowColor} />
          </button>
          <button onClick={() => handlePlayerMove(PlayerMoveDirections.down)}>
            <ArrowDown stroke={arrowColor} />
          </button>
          <button onClick={() => handlePlayerMove(PlayerMoveDirections.right)}>
            <ArrowRight stroke={arrowColor} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Game
