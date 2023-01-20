import { createContext, useReducer } from 'react'
import { GAME_ACTIONS } from '../reducers/GameReducer/actions'
import { gameReducer } from '../reducers/GameReducer/gameReducer'
import GAME_INITIAL_STATE from '../reducers/GameReducer/gameInitialState'
import { GameState } from '../types'

interface Context {
  gameState: GameState
  dispatch: React.Dispatch<GAME_ACTIONS>
}

export const GameContext = createContext<Context>({
  gameState: GAME_INITIAL_STATE,
  dispatch: () => {}
})

interface Props {
  children: React.ReactNode
}

const GameContextProvider = ({ children }: Props) => {
  const [gameState, dispatch] = useReducer(gameReducer, GAME_INITIAL_STATE)

  return (
    <GameContext.Provider value={{ gameState, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider
