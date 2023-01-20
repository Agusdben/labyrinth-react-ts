import { useContext } from 'react'
import { OptionContext } from '../contexts/OptionsContext'
import { Dimension } from '../types'

const useOptions = () => {
  const { optionsState, dispatch } = useContext(OptionContext)
  const { player, resolution } = optionsState

  const setPlayerColor = (color: string) => {
    dispatch({ type: 'set_player_color', payload: color })
  }

  const setResolution = (res: Dimension) => {
    dispatch({ type: 'set_resolution', payload: res })
  }

  return { setPlayerColor, setResolution, playerOptions: player, resolution }
}

export default useOptions
