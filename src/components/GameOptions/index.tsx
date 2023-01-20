import useOptions from '../../hooks/useOptions'
import useWindows from '../../hooks/useWindows'
import MenuButtons from '../MenuButtons'

const GameOptions = () => {
  const { resolution } = useOptions()
  const { setChangePlayerColorWindow } = useWindows()
  return (
    <div
      style={{ width: resolution.width, height: resolution.height }}
      className='flex justify-center items-center'
    >
      <MenuButtons
        onClick={setChangePlayerColorWindow}
        value='Change player color'
      />
    </div>
  )
}

export default GameOptions
