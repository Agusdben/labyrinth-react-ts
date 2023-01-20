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
      <MenuButtons value='Options' onClick={setOptionsWindow} />
      <MenuButtons value='How to play' onClick={setHowToPlayWindow} />
    </div>
  )
}

export default Menu
