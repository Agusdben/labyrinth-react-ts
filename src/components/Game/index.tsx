import useWindows from '../../hooks/useWindows'
import { Dimension, Windows } from '../../types'
import Labyrinth from '../Labyrinth'
import Levels from '../Levels'
import Menu from '../Menu'

const Game = ({ width, height }: Dimension) => {
  const { window } = useWindows()

  const WINDOWS = {
    [Windows.menu]: <Menu />,
    [Windows.levels]: <Levels />,
    [Windows.labyrinth]: <Labyrinth width={width} height={height} />
  }

  return (
    <section className='m-auto'>
      <h2 className='text-center'>{window}</h2>
      <article style={{ width, height }} className='flex'>
        {WINDOWS[window]}
      </article>
    </section>
  )
}

export default Game
