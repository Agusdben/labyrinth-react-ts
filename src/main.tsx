import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import GameContextProvider from './contexts/GameContext'
import OptionsContextProvider from './contexts/OptionsContext'
import UserContextProvider from './contexts/UserContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <OptionsContextProvider>
          <GameContextProvider>
            <App />
          </GameContextProvider>
        </OptionsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
