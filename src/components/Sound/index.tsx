import useOptions from '../../hooks/useOptions'
import InpurRange from '../InputRange'

const Sound = () => {
  const { resolution, sounds, setEffectsVolume, setMusicVolume } = useOptions()

  const handleEffectsVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEffectsVolume(Number(e.target.value))
  }

  const handleMusicVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMusicVolume(Number(e.target.value))
  }

  return (
    <div
      style={{ width: resolution.width, height: resolution.height }}
      className='flex flex-col gap-6'
    >
      <InpurRange
        value={sounds.effects}
        onChange={e => handleEffectsVolume(e)}
        tag='Effects'
        min={0}
        max={1}
        step={0.01}
      />
      <InpurRange
        value={sounds.music}
        onChange={e => handleMusicVolume(e)}
        tag='Music'
        min={0}
        max={1}
        step={0.01}
      />
    </div>
  )
}

export default Sound
