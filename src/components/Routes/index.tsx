import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import HowToPlay from '../../pages/HowToPlay'
import Labyrinth from '../../pages/Labyrinth'
import Levels from '../../pages/Levels'
import Menu from '../../pages/Menu'
import Options from '../../pages/Options'
import OptionsGraphics from '../../pages/OptionsGraphics'
import OptionsPlayer from '../../pages/OptionsPlayer'
import OptionsSound from '../../pages/OptionsSound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='menu'>
        <Route index={true} element={<Menu />} />
        <Route path='levels' element={<Levels />} />
        <Route path='options'>
          <Route index={true} element={<Options />} />
          <Route path='player' element={<OptionsPlayer />} />
          <Route path='graphics' element={<OptionsGraphics />} />
          <Route path='sound' element={<OptionsSound />} />
        </Route>
        <Route path='how' element={<HowToPlay />} />
      </Route>
      <Route path='labyrinth/:level' element={<Labyrinth />} />
    </Routes>
  )
}

export default AppRoutes
