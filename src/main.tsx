import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import GameContextProvider from './contexts/GameContext'
import MusicContextProvider from './contexts/MusicContext'
import OptionsContextProvider from './contexts/OptionsContext'
import UserContextProvider from './contexts/UserContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <OptionsContextProvider>
          <MusicContextProvider>
            <GameContextProvider>
              <App />
            </GameContextProvider>
          </MusicContextProvider>
        </OptionsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
