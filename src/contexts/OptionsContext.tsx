import { createContext, useReducer } from 'react'
import { OPTIONS_ACTIONS } from '../reducers/OptionsReducer/actions'
import OPTIONS_INITIAL_STATE from '../reducers/OptionsReducer/optionsInitialState'
import { optionsReducer } from '../reducers/OptionsReducer/optionsReducer'
import { Options } from '../types'

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

const OptionsContextProvider = ({ children }: Props) => {
  const [optionsState, dispatch] = useReducer(
    optionsReducer,
    OPTIONS_INITIAL_STATE
  )
  return (
    <OptionContext.Provider value={{ optionsState, dispatch }}>
      {children}
    </OptionContext.Provider>
  )
}

export default OptionsContextProvider
