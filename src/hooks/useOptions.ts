import { useContext } from 'react'
import { OptionContext } from '../contexts/OptionsContext'

const useOptions = () => {
  const { optionsState, dispatch } = useContext(OptionContext)
  const { player, resolution } = optionsState

  const setPlayerColor = (color: string) => {
    dispatch({ type: 'set_player_color', payload: color })
  }

  return { setPlayerColor, playerOptions: player, resolution }
}

export default useOptions
