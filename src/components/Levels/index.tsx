import { useState } from 'react'
import LEVELS from '../../constants/levels'
import useLevel from '../../hooks/useLevel'
import useWindows from '../../hooks/useWindows'

const Levels = () => {
  const { setLabyrinthWindow } = useWindows()
  const { setLevel } = useLevel()
  const [levelSelected, setLevelSelected] = useState<number>(0)

  const handleSelectedLevel = (l: number) => () => {
    setLevelSelected(l)
  }

  const handleGo = () => {
    setLevel(levelSelected)
    setLabyrinthWindow()
  }

  return (
    <div className='flex flex-col gap-2 h-full w-full'>
      <ul className='p-3 flex-1 grid grid-cols-4 gap-4 overflow-y-auto'>
        {LEVELS.map((l, index) => (
          <li className='grid aspect-square' key={l.level}>
            <button
              className={`border-zinc-200 border-2 hover:bg-zinc-200 hover:text-zinc-900 ${
                levelSelected === index + 1 ? 'bg-zinc-200 text-zinc-900' : ''
              }`}
              onClick={handleSelectedLevel(l.level)}
            >
              <p>Level</p>
              <p>{l.level}</p>
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleGo}
        disabled={levelSelected < 1}
        className='disabled:opacity-50 border-zinc-200 border-2 px-6 m-auto hover:text-zinc-900 hover:bg-zinc-200'
      >
        GO!
      </button>
    </div>
  )
}

export default Levels
