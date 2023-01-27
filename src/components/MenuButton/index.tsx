import useSfx from '../../hooks/useSfx'
import btnHoverSong from '/sfx/menu-hover.mp3'
import btnClickSong from '/sfx/menu-click.mp3'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'

interface Props {
  route: string
  value: string
  disabled?: boolean
}

const MenuButton = ({ route, value, disabled }: Props) => {
  const navigate = useNavigate()
  const btnRef = useRef<HTMLDivElement>(null)
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
      <div className='flex' ref={btnRef} onMouseEnter={hoverSong.play}>
        <Button
          type='button'
          onClick={handleClick}
          disabled={Boolean(disabled)}
        >
          {value}
        </Button>
      </div>
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
