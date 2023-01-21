import Game from './components/Game'
import MainMenuMusic from './components/MainMenuMusic'

function App () {
  return (
    <div className='flex flex-col min-h-screen w-screen bg-zinc-900 text-zinc-200 font-bold overflow-x-hidden'>
      <header>HEADER</header>
      <main className='flex-1 flex m-auto'>
        <Game />
        <MainMenuMusic />
      </main>
      <footer>FOOTER</footer>
    </div>
  )
}

export default App
