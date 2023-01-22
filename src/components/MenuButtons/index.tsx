import useSfx from '../../hooks/useSfx'
import btnHoverSong from '/sfx/menu-hover.mp3'
import btnClickSong from '/sfx/menu-click.mp3'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  route: string
  value: string
  disabled?: boolean
}

const MenuButton = ({ route, value, disabled }: Props) => {
  const navigate = useNavigate()
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
      navigate(route)
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
        className='text-center border-current border-2 px-6 py-2 w-3/4 m-auto disabled:opacity-60 enabled:hover:text-zinc-900 enabled:hover:bg-zinc-200'
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

export default MenuButton
