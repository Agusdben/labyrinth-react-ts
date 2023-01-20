import usePlayer from '../../hooks/usePlayer'
import useWindows from '../../hooks/useWindows'
import { Dimension } from '../../types'
import MenuButtons from '../MenuButtons'

const GameOptions = ({ width, height }: Dimension) => {
  const { setChangePlayerColorWindow } = useWindows()
  return (
    <div style={{ width, height }} className='flex justify-center items-center'>
      <MenuButtons
        onClick={setChangePlayerColorWindow}
        value='Change player color'
      />
    </div>
  )
}

export default GameOptions
