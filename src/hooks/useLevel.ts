import { useContext } from 'react'
import { GameContext } from '../contexts/GameContext'

const useLevel = () => {
  const { dispatch } = useContext(GameContext)

  const setLevel = (l: number) => {
    dispatch({ type: 'set_level', payload: l - 1 })
  }

  return {
    setLevel
  }
}

export default useLevel
