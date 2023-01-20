import useWindows from '../../hooks/useWindows'
import { Dimension, Windows } from '../../types'
import Labyrinth from '../Labyrinth'
import Levels from '../GameLevels'
import Menu from '../Menu'
import Arrowback from '../ArrowBack'
import GameOptions from '../GameOptions'
import HowToPlay from '../HowToPlay'
import ChangePlayerColor from '../ChangePlayerColor'
import PrevWindowButton from '../PrevWindowButton'

const Game = () => {
  const { window } = useWindows()

  const WINDOWS: { [key: string]: JSX.Element } = {
    [Windows.menu]: <Menu />,
    [Windows.levels]: <Levels />,
    [Windows.labyrinth]: <Labyrinth />,
    [Windows.options]: <GameOptions />,
    [Windows.how_to_play]: <HowToPlay />,
    [Windows.change_player_color]: <ChangePlayerColor />
  }

  return (
    <section className='m-auto flex flex-col gap-4 bg-zinc-800 p-4 rounded-md'>
      <header className='flex gap-2 justify-between items-center'>
        <h2 className='text-center text-2xl'>{window}</h2>
        {window !== Windows.menu ? <PrevWindowButton /> : null}
      </header>
      <article className='flex overflow-y-auto'>{WINDOWS[window]}</article>
    </section>
  )
}

export default Game
