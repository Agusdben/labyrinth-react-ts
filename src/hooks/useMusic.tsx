import { useContext, useRef, useEffect } from 'react'
import PLAY_LIST from '../constants/playList'
import { MusicContext } from '../contexts/MusicContext'
import { Music, Song } from '../types'
import useOptions from './useOptions'

const useMusic = () => {
  const { musicState, dispatch } = useContext(MusicContext)
  const {
    sounds: { music }
  } = useOptions()

  const songRef = useRef<HTMLAudioElement>(null)

  const setNextSong = () => {
    const totalSongs = PLAY_LIST.length - 1
    const { indexInPlaylist } = musicState

    if (indexInPlaylist === totalSongs) {
      dispatch({ type: 'reset' })
      return
    }
    const nextIndex = indexInPlaylist + 1
    const nextSong = PLAY_LIST[nextIndex]
    const newState: Music = {
      currentSong: nextSong,
      indexInPlaylist: nextIndex
    }
    dispatch({ type: 'set_song', payload: newState })
  }

  useEffect(() => {
    if (!songRef.current) return
    songRef.current.volume = music
  }, [songRef.current, music])

  useEffect(() => {
    const handlePlay = () => {
      songRef.current?.play()
    }

    document.addEventListener('click', handlePlay, { once: true })

    return () => document.removeEventListener('click', handlePlay)
  }, [songRef.current])

  useEffect(() => {
    songRef.current?.addEventListener('ended', setNextSong)

    return () => songRef.current?.removeEventListener('ended', setNextSong)
  }, [songRef.current, musicState])

  useEffect(() => {
    songRef.current?.load()
    songRef.current?.play()
  }, [musicState, songRef.current])

  return {
    songRef,
    song: musicState.currentSong
  }
}

export default useMusic
