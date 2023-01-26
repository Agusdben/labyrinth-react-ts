import { createContext, useReducer } from 'react'
import { MUSIC_ACTIONS } from '../reducers/MusicReducer/actions'
import MUSIC_INITIAL_STATE from '../reducers/MusicReducer/musicInitialState'
import { musicReducer } from '../reducers/MusicReducer/musicReducer'
import { Music } from '../types'

interface Context {
  musicState: Music
  dispatch: React.Dispatch<MUSIC_ACTIONS>
}

export const MusicContext = createContext<Context>({
  musicState: MUSIC_INITIAL_STATE,
  dispatch: () => {}
})

interface Props {
  children: React.ReactNode
}

const MusicContextProvider = ({ children }: Props) => {
  const [musicState, dispatch] = useReducer(musicReducer, MUSIC_INITIAL_STATE)
  return (
    <MusicContext.Provider value={{ musicState, dispatch }}>
      {children}
    </MusicContext.Provider>
  )
}

export default MusicContextProvider
