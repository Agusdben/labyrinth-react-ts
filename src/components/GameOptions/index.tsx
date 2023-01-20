import useOptions from '../../hooks/useOptions'
import useWindows from '../../hooks/useWindows'
import MenuButtons from '../MenuButtons'

const GameOptions = () => {
  const { resolution } = useOptions()
  const { setChangePlayerColorWindow, setGraphicsWindow } = useWindows()
  return (
    <div
      style={{ width: resolution.width, height: resolution.height }}
      className='flex flex-col gap-4 justify-center '
    >
      <MenuButtons
        onClick={setChangePlayerColorWindow}
        value='Change player color'
      />
      <MenuButtons onClick={setGraphicsWindow} value='Graphics' />
    </div>
  )
}

export default GameOptions
