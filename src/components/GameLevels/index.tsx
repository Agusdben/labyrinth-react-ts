import { useState } from 'react'
import LEVELS from '../../constants/levels'
import useLevel from '../../hooks/useLevel'
import useOptions from '../../hooks/useOptions'
import useWindows from '../../hooks/useWindows'
import { FaPlay } from 'react-icons/fa'
const GameLevels = () => {
  const { resolution } = useOptions()
  const { setLabyrinthWindow } = useWindows()
  const { setLevel } = useLevel()

  const handlePlay = (l: number) => {
    setLevel(l)
    setLabyrinthWindow()
  }

  return (
    <div
      className='flex flex-col gap-2 h-full w-full'
      style={{ width: resolution.width, height: resolution.height }}
    >
      <ul className='flex-1 flex flex-col gap-4 overflow-y-auto px-2'>
        {LEVELS.map(l => (
          <li className='border p-2 flex justify-between' key={l.level}>
            <p>
              level <span>{l.level}</span>
            </p>
            <button onClick={() => handlePlay(l.level)}>
              <FaPlay className='text-green-600' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GameLevels
