import Game from './components/Game'

function App () {
  return (
    <div className='flex flex-col min-h-screen w-screen bg-zinc-900 text-zinc-200 font-bold'>
      <header>HEADER</header>
      <main className='flex-1 flex m-auto'>
        <Game width={320} height={320} />
      </main>
      <footer>FOOTER</footer>
    </div>
  )
}

export default App
