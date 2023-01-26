import useMusic from '../../hooks/useMusic'

const BackgroundMusic = () => {
  const { songRef, song } = useMusic()

  return (
    <audio ref={songRef}>
      <source src={`/music/${song.file}`} type='audio/mp3' />
    </audio>
  )
}

export default BackgroundMusic
