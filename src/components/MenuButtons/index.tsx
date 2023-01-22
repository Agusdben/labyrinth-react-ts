import useSfx from '../../hooks/useSfx'
import btnHoverSong from '/sfx/menu-hover.mp3'
import btnClickSong from '/sfx/menu-click.mp3'
import { useRef } from 'react'

interface Props {
  onClick: () => void
  value: string
  disabled?: boolean
}

const MenuButtons = ({ onClick, value, disabled = false }: Props) => {
  const btnRef = useRef<HTMLButtonElement>(null)
  const hoverSong = useSfx()
  const clickSong = useSfx()

  const playSfx = () => {
    clickSong.play()
  }

  const handleOnClick = () => {
    if (!clickSong.ref.current) return
    const ms = 1000
    setTimeout(() => {
      onClick()
    }, clickSong.ref.current.duration * ms) // seconds -> ms
    console.log(clickSong.ref.current.duration)
  }

  const handleAnimation = () => {
    if (!btnRef.current) return
    btnRef.current.style.scale = '1.2'
  }

  const handleClick = () => {
    playSfx()
    handleAnimation()
    handleOnClick()
  }

  return (
    <div className='grid'>
      <button
        ref={btnRef}
        type='button'
        onClick={handleClick}
        onMouseEnter={hoverSong.play}
        disabled={disabled}
        className='border-current border-2 px-6 py-2 w-3/4 m-auto hover:text-zinc-900 hover:bg-zinc-200'
      >
        {value}
      </button>
      <audio ref={hoverSong.ref}>
        <source src={btnHoverSong} type='audio/mp3' />
      </audio>
      <audio ref={clickSong.ref}>
        <source src={btnClickSong} type='audio/mp3' />
      </audio>
    </div>
  )
}

export default MenuButtons
