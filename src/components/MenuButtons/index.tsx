import { useRef } from 'react'
import useOptions from '../../hooks/useOptions'
import btnSong from '/sfx/menu-hover.mp3'

interface Props {
  onClick: () => void
  value: string
  disabled?: boolean
}

const MenuButtons = ({ onClick, value, disabled = false }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const { sounds } = useOptions()
  const playButtonSong = () => {
    if (!audioRef.current) return
    audioRef.current.volume = sounds.effects
    audioRef.current.play()
  }

  return (
    <div className='grid'>
      <button
        type='button'
        onClick={onClick}
        onMouseEnter={playButtonSong}
        disabled={disabled}
        className='border-current border-2 px-6 py-2 hover:text-zinc-900 hover:bg-zinc-200'
      >
        {value}
      </button>
      <audio ref={audioRef} src={btnSong} />
    </div>
  )
}

export default MenuButtons
