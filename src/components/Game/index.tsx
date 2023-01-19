import useWindows from '../../hooks/useWindows'
import { Dimension, Windows } from '../../types'
import Labyrinth from '../Labyrinth'
import Levels from '../Levels'
import Menu from '../Menu'

const Game = ({ width, height }: Dimension) => {
  const { window } = useWindows()

  const WINDOWS = {
    [Windows.menu]: <Menu width={width} height={height} />,
    [Windows.levels]: <Levels width={width} height={height} />,
    [Windows.labyrinth]: <Labyrinth width={width} height={height} />
  }

  return (
    <section className='m-auto'>
      <h2 className='text-center'>{window}</h2>
      <article className='flex'>{WINDOWS[window]}</article>
    </section>
  )
}

export default Game
