import React from 'react'
import InpurRange from '../../components/InputRange'
import PageSection from '../../components/PageSection'
import Title from '../../components/Title'
import WindowContainer from '../../components/WindowContainer'
import useOptions from '../../hooks/useOptions'

const OptionsSound = () => {
  const { sounds, setEffectsVolume, setMusicVolume } = useOptions()

  const handleEffectsVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEffectsVolume(Number(e.target.value))
  }

  const handleMusicVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMusicVolume(Number(e.target.value))
  }
  return (
    <PageSection>
      <Title>Sound options</Title>
      <WindowContainer>
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
      </WindowContainer>
    </PageSection>
  )
}

export default OptionsSound
