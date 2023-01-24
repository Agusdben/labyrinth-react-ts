import { createContext, useReducer } from 'react'
import { OPTIONS_ACTIONS } from '../reducers/OptionsReducer/actions'
import OPTIONS_INITIAL_STATE from '../reducers/OptionsReducer/optionsInitialState'
import { optionsReducer } from '../reducers/OptionsReducer/optionsReducer'
import { LocalStorage, Options } from '../types'

interface OptionsContext {
  optionsState: Options
  dispatch: React.Dispatch<OPTIONS_ACTIONS>
}

export const OptionContext = createContext<OptionsContext>({
  optionsState: OPTIONS_INITIAL_STATE,
  dispatch: () => {}
})

interface Props {
  children: React.ReactNode
}

const initOptionsState = (): Options => {
  const savedOptions = localStorage.getItem(LocalStorage.options)
  return savedOptions ? JSON.parse(savedOptions) : OPTIONS_INITIAL_STATE
}

const OptionsContextProvider = ({ children }: Props) => {
  const [optionsState, dispatch] = useReducer(
    optionsReducer,
    initOptionsState()
  )
  return (
    <OptionContext.Provider value={{ optionsState, dispatch }}>
      {children}
    </OptionContext.Provider>
  )
}

export default OptionsContextProvider
