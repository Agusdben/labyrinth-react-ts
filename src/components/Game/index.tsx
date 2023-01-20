import useWindows from '../../hooks/useWindows'
import { Dimension, Windows } from '../../types'
import Labyrinth from '../Labyrinth'
import Levels from '../GameLevels'
import Menu from '../Menu'
import Arrowback from '../ArrowBack'

const Game = ({ width, height }: Dimension) => {
  const { window, windowsHistory, handlePrevWindow } = useWindows()

  const WINDOWS = {
    [Windows.menu]: <Menu width={width} height={height} />,
    [Windows.levels]: <Levels width={width} height={height} />,
    [Windows.labyrinth]: <Labyrinth width={width} height={height} />,
    [Windows.options]: <></>
  }

  return (
    <section className='m-auto'>
      <h2 className='text-center'>{window}</h2>

      <article className='flex gap-2 opacity-80'>
        <button type='button' onClick={handlePrevWindow}>
          <Arrowback className='w-12' />
        </button>
      </article>
      <article className='flex'>{WINDOWS[window]}</article>
    </section>
  )
}

export default Game
