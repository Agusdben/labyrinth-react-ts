import BackgroundMusic from './components/BackgroundMusic'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRoutes from './components/Routes'

function App () {
  return (
    <div className='flex gap-10 flex-col min-h-screen max-w-screen bg-zinc-900 text-orange-300 font-bold overflow-x-hidden '>
      <Header />
      <main className='flex-1 flex m-auto'>
        <AppRoutes />
        <BackgroundMusic />
      </main>
      <Footer />
    </div>
  )
}

export default App
