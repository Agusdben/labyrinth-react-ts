import GameTitle from '../GameTitle'
import NowPlayig from '../NowPlaying'

const Header = () => {
  return (
    <header className='flex items-center p-4'>
      <h1 className='text-2xl'>
        <GameTitle />
      </h1>
      <NowPlayig />
    </header>
  )
}

export default Header
