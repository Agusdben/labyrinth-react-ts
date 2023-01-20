import { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import { GameState, Windows } from '../types'

const useWindows = () => {
  const { dispatch, gameState } = useContext(GameContext)

  const getNewWindowObject = (nextWindow: Windows): GameState['window'] => {
    const newWindow: GameState['window'] = {
      actual: nextWindow,
      history: [...gameState.window.history, nextWindow]
    }
    return newWindow
  }

  const handlePrevWindow = () => {
    const window = { ...gameState.window }
    const { history } = window
    if (history.length < 2) return
    history.pop()
    const prevWindow = history.pop()
    if (!prevWindow) return
    const newWindow = getNewWindowObject(prevWindow)
    dispatch({
      type: 'set_window',
      payload: newWindow
    })
  }

  const setLevelsWindow = () => {
    dispatch({
      type: 'set_window',
      payload: getNewWindowObject(Windows.levels)
    })
  }

  const setLabyrinthWindow = () => {
    dispatch({
      type: 'set_window',
      payload: getNewWindowObject(Windows.labyrinth)
    })
  }

  const setOptionsWindow = () => {
    dispatch({
      type: 'set_window',
      payload: getNewWindowObject(Windows.options)
    })
  }

  const setChangePlayerColorWindow = () => {
    dispatch({
      type: 'set_window',
      payload: getNewWindowObject(Windows.change_player_color)
    })
  }

  const setHowToPlayWindow = () => {
    dispatch({
      type: 'set_window',
      payload: getNewWindowObject(Windows.how_to_play)
    })
  }

  const setGraphicsWindow = () => {
    dispatch({
      type: 'set_window',
      payload: getNewWindowObject(Windows.graphics)
    })
  }

  return {
    window: gameState.window.actual,
    windowsHistory: gameState.window.history,
    setLevelsWindow,
    setLabyrinthWindow,
    setOptionsWindow,
    handlePrevWindow,
    setChangePlayerColorWindow,
    setHowToPlayWindow,
    setGraphicsWindow
  }
}

export default useWindows
