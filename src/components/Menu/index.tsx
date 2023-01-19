import useWindows from '../../hooks/useWindows'
import { Dimension } from '../../types'

const Menu = ({ width, height }: Dimension) => {
  const { setLevelsWindow } = useWindows()

  return (
    <div
      className='flex flex-col gap-4 justify-center m-auto'
      style={{ width, height }}
    >
      <button
        className='border-current border-2 px-6 py-2 hover:text-zinc-900 hover:bg-zinc-200'
        type='button'
        onClick={setLevelsWindow}
      >
        Play!
      </button>
      <button
        className='border-current border-2 px-6 py-2 hover:text-zinc-900 hover:bg-zinc-200'
        type='button'
      >
        Options
      </button>
    </div>
  )
}

export default Menu
