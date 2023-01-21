import { useState, useEffect, useRef } from 'react'
import useOptions from './useOptions'

interface Props {
  songPath: string
}

const useBackgroundMusic = ({ songPath }: Props) => {
  const { sounds } = useOptions()
  const musicRef = useRef<HTMLAudioElement>(null)

  const handlePlay = () => {
    if (!musicRef.current) return
    musicRef.current.play()
  }

  useEffect(() => {
    if (!musicRef.current) return
    musicRef.current.volume = sounds.music
    musicRef.current.src = songPath
    musicRef.current.load()
  }, [musicRef.current, songPath])

  useEffect(() => {
    if (!musicRef.current) return
    musicRef.current.volume = sounds.music
  }, [sounds.music])

  useEffect(() => {
    if (!musicRef.current) return
    document.addEventListener('mousemove', handlePlay, { once: true })
    return () => document.removeEventListener('mousemove', handlePlay)
  }, [musicRef.current])

  return {
    musicRef
  }
}

export default useBackgroundMusic
