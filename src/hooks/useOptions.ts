import { useContext } from 'react'
import { OptionContext } from '../contexts/OptionsContext'
import { Dimension, LocalStorage, Options } from '../types'

const useOptions = () => {
  const { optionsState, dispatch } = useContext(OptionContext)
  const { player, resolution, sounds } = optionsState

  const saveOptions = (options: Options) => {
    localStorage.setItem(LocalStorage.options, JSON.stringify(options))
  }

  const setPlayerColor = (color: string) => {
    dispatch({ type: 'set_player_color', payload: color })
    saveOptions({ ...optionsState, player: { color } })
  }

  const setResolution = (res: Dimension) => {
    dispatch({ type: 'set_resolution', payload: res })
    saveOptions({ ...optionsState, resolution: res })
  }

  const setEffectsVolume = (volume: number) => {
    dispatch({ type: 'set_effects_volume', payload: volume })
    saveOptions({
      ...optionsState,
      sounds: { ...optionsState.sounds, effects: volume }
    })
  }

  const setMusicVolume = (volume: number) => {
    dispatch({ type: 'set_music_volume', payload: volume })
    saveOptions({
      ...optionsState,
      sounds: { ...optionsState.sounds, music: volume }
    })
  }

  return {
    setPlayerColor,
    setResolution,
    setEffectsVolume,
    setMusicVolume,
    playerOptions: player,
    resolution,
    sounds
  }
}

export default useOptions
