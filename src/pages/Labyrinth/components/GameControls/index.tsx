import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineArrowLeft,
  AiOutlineArrowRight
} from 'react-icons/ai'
import { PlayerMoveDirections } from '../../../../types'

interface Props {
  handlePlayerMove: (direction: PlayerMoveDirections) => void
}

const GameControls = ({ handlePlayerMove }: Props) => {
  return (
    <div className='flex flex-col items-center gap-4 [&_button]:text-zinc-900 [&_button]:text-xl [&_button]:bg-zinc-200 [&_button]:p-2'>
      <button onClick={() => handlePlayerMove(PlayerMoveDirections.up)}>
        <AiOutlineArrowUp />
      </button>
      <div className='flex gap-4'>
        <button onClick={() => handlePlayerMove(PlayerMoveDirections.left)}>
          <AiOutlineArrowLeft />
        </button>
        <button onClick={() => handlePlayerMove(PlayerMoveDirections.down)}>
          <AiOutlineArrowDown />
        </button>
        <button onClick={() => handlePlayerMove(PlayerMoveDirections.right)}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  )
}

export default GameControls
