import { LocalStorage } from '../types'

const useSaveGame = () => {
  const saveGame = (level: number) => {
    const savedGame = getSavedGame()
    if (savedGame > level) return
    window.localStorage.setItem(LocalStorage.savedGame, String(level + 1))
  }

  const getSavedGame = (): number => {
    const savedGame = window.localStorage.getItem(LocalStorage.savedGame)
    return savedGame ? Number(savedGame) : 0
  }

  return {
    saveGame,
    getSavedGame
  }
}

export default useSaveGame
