import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Menu from './pages/Menu'
import Home from './pages/Home'
import Levels from './pages/Levels'
import Labyrinth from './pages/Labyrinth'
import Options from './pages/Options'
import OptionsPlayer from './pages/OptionsPlayer'
import OptionsGraphics from './pages/OptionsGraphics'
import OptionsSound from './pages/OptionsSound'
import HowToPlay from './pages/HowToPlay'

function App () {
  return (
    <div className='flex flex-col min-h-screen w-screen bg-zinc-900 text-zinc-200 font-bold overflow-x-hidden'>
      <header>HEADER</header>
      <BrowserRouter>
        <main className='flex-1 flex m-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='menu' element={<Menu />} />
            <Route path='levels' element={<Levels />} />
            <Route path='labyrinth/:level' element={<Labyrinth />} />
            <Route path='options'>
              <Route index={true} element={<Options />} />
              <Route path='player' element={<OptionsPlayer />} />
              <Route path='graphics' element={<OptionsGraphics />} />
              <Route path='sound' element={<OptionsSound />} />
            </Route>
            <Route path='how' element={<HowToPlay />} />
          </Routes>
        </main>
      </BrowserRouter>
      <footer>FOOTER</footer>
    </div>
  )
}

export default App
