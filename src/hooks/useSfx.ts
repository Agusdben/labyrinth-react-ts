import { useRef, useEffect } from 'react'
import useOptions from './useOptions'

const useSfx = () => {
  const ref = useRef<HTMLAudioElement>(null)

  const { sounds } = useOptions()

  const play = () => {
    if (!ref.current) return
    ref.current.play()
  }

  useEffect(() => {
    if (!ref.current) return
    ref.current.volume = sounds.effects
  }, [sounds.effects, ref.current])

  return {
    ref,
    play
  }
}

export default useSfx
