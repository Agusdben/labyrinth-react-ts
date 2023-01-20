import useOptions from '../../hooks/useOptions'
import useWindows from '../../hooks/useWindows'
import MenuButtons from '../MenuButtons'

const Menu = () => {
  const { resolution } = useOptions()
  const { setLevelsWindow, setOptionsWindow, setHowToPlayWindow } = useWindows()

  return (
    <div
      className='flex flex-col gap-4 justify-center m-auto'
      style={{ width: resolution.width, height: resolution.height }}
    >
      <MenuButtons value='Play!' onClick={setLevelsWindow} />
      <MenuButtons value='How to play' onClick={setHowToPlayWindow} />
      <MenuButtons value='Options' onClick={setOptionsWindow} />
    </div>
  )
}

export default Menu
