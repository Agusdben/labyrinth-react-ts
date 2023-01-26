import { useContext } from 'react'
import { MusicContext } from '../../contexts/MusicContext'
import { BsSoundwave } from 'react-icons/bs'
const NowPlayig = () => {
  const { musicState } = useContext(MusicContext)
  const { currentSong } = musicState

  return (
    <div className='text-zinc-200 font-normal flex gap-2 items-center justify-center ml-auto'>
      <BsSoundwave className='text-orange-300 animate-pulse text-2xl' />
      <p className='flex flex-row gap-2'>
        {currentSong.name} - {currentSong.author}
      </p>
    </div>
  )
}

export default NowPlayig
