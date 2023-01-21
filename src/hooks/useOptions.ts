import { useContext } from 'react'
import { OptionContext } from '../contexts/OptionsContext'
import { Dimension } from '../types'

const useOptions = () => {
  const { optionsState, dispatch } = useContext(OptionContext)
  const { player, resolution, sounds } = optionsState

  const setPlayerColor = (color: string) => {
    dispatch({ type: 'set_player_color', payload: color })
  }

  const setResolution = (res: Dimension) => {
    dispatch({ type: 'set_resolution', payload: res })
  }

  const setEffectsVolume = (volume: number) => {
    dispatch({ type: 'set_effects_volume', payload: volume })
  }
  const setMusicVolume = (volume: number) => {
    dispatch({ type: 'set_music_volume', payload: volume })
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
