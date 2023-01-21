import useBackgroundMusic from '../../hooks/useBackgroundMusic'
import menuMusic from '/music/menu-music.mp3'

const MainMenuMusic = () => {
  const { musicRef } = useBackgroundMusic({ songPath: menuMusic })

  return (
    <audio ref={musicRef} loop>
      <source src={menuMusic} type='audio/mp3' />
    </audio>
  )
}

export default MainMenuMusic
