import { PlayerMoveDirections } from '../../types'
import ArrowDown from '../ArrowDown'
import ArrowLeft from '../ArrowLeft'
import ArrowRight from '../ArrowRight'
import ArrowUp from '../ArrowUp'

interface Props {
  handlePlayerMove: (direction: PlayerMoveDirections) => void
}

const GameControls = ({ handlePlayerMove }: Props) => {
  const arrowColor = '#a1a1a1'

  return (
    <div className='flex flex-col items-center [&_button]:w-12 lg:hidden'>
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
  )
}

export default GameControls
