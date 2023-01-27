import GameTitle from '../GameTitle'
import NowPlayig from '../NowPlaying'
import LOGO from '/favicon.svg'
const Header = () => {
  return (
    <header className='flex items-center p-4'>
      <h1 className='text-2xl flex items-center gap-3 text-zinc-200'>
        <img
          className='object-contain aspect-square w-6'
          src={LOGO}
          alt='Easy maze page logo'
        ></img>
        <GameTitle />
      </h1>
      <NowPlayig />
    </header>
  )
}

export default Header
