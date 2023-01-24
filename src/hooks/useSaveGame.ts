import LEVELS from '../constants/levels'
import { LocalStorage } from '../types'

const useSaveGame = () => {
  const saveGame = (level: number) => {
    window.localStorage.setItem(LocalStorage.savedGame, String(level + 1))
  }

  const getSavedGame = (): number => {
    const savedGame = window.localStorage.getItem(LocalStorage.savedGame)
    return savedGame ? Number(savedGame) : LEVELS[0].level
  }

  return {
    saveGame,
    getSavedGame
  }
}

export default useSaveGame
