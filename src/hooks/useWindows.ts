import { useContext, useState } from 'react'
import { GameContext } from '../contexts/GameContext'
import { Windows } from '../types'

const useWindows = () => {
  const { dispatch, gameState } = useContext(GameContext)
  const [windowsHistory, setWindowsHistory] = useState<Array<string>>([])

  const setLevelsWindow = () => {
    dispatch({ type: 'set_window', payload: Windows.levels })
  }

  const setLabyrinthWindow = () => {
    dispatch({ type: 'set_window', payload: Windows.labyrinth })
  }

  return {
    window: gameState.window,
    setLevelsWindow,
    setLabyrinthWindow
  }
}

export default useWindows
