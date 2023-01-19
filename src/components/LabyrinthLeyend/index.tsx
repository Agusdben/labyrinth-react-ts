import { useContext } from 'react'
import { GameContext } from '../../contexts/GameContext'

export const LabyrinthLeyend = () => {
  const { gameState } = useContext(GameContext)
  const { player, labyrinth } = gameState
  const LEYEND = [
    { key: 'Player', value: player.color },
    { key: 'Exit', value: labyrinth.exitColor },
    { key: 'Wall', value: labyrinth.wallColor },
    { key: 'Path', value: labyrinth.pathColor }
  ]
  return (
    <ul className='flex gap-2 justify-center'>
      {LEYEND.map(l => (
        <li className='flex gap-2 items-center' key={l.key}>
          <div
            className='aspect-square w-4'
            style={{ backgroundColor: l.value }}
          />
          <span>{l.key}</span>
        </li>
      ))}
    </ul>
  )
}
