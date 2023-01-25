import { LABYRINTH_STYLES } from '../../../../constants/styles'
import useOptions from '../../../../hooks/useOptions'

export const LabyrinthLeyend = () => {
  const { playerOptions } = useOptions()

  const LEYEND = [
    { key: 'Player', value: playerOptions.color },
    { key: 'Exit', value: LABYRINTH_STYLES.exitColor },
    { key: 'Walls', value: LABYRINTH_STYLES.wallColor },
    { key: 'Path', value: LABYRINTH_STYLES.pathColor }
  ]

  return (
    <ul className='flex gap-4 justify-center'>
      {LEYEND.map(l => (
        <li className='flex gap-1 items-center' key={l.key}>
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
