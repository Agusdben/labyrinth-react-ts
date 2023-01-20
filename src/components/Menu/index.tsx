import useWindows from '../../hooks/useWindows'
import { Dimension } from '../../types'
import MenuButtons from '../MenuButtons'

const Menu = ({ width, height }: Dimension) => {
  const { setLevelsWindow, setOptionsWindow, setHowToPlayWindow } = useWindows()

  return (
    <div
      className='flex flex-col gap-4 justify-center m-auto'
      style={{ width, height }}
    >
      <MenuButtons value='Play!' onClick={setLevelsWindow} />
      <MenuButtons value='How to play' onClick={setHowToPlayWindow} />
      <MenuButtons value='Options' onClick={setOptionsWindow} />
    </div>
  )
}

export default Menu
