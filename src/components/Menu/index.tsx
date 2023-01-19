import useWindows from '../../hooks/useWindows'

const Menu = () => {
  const { setLevelsWindow, window } = useWindows()

  return (
    <div className='grid gap-4 justify-center m-auto'>
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
