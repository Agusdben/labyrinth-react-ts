import PageSection from '../../components/PageSection'
import Subtitle from '../../components/Subtitle'
import Title from '../../components/Title'
import WindowContainer from '../../components/WindowContainer'
import { LABYRINTH_STYLES, PLAYER_STYLES } from '../../constants/styles'
import useOptions from '../../hooks/useOptions'

const OptionsPlayer = () => {
  const { setPlayerColor, playerOptions } = useOptions()

  const handleColorSelected = (style: string) => () => {
    setPlayerColor(style)
  }

  return (
    <PageSection>
      <Title>Player options</Title>
      <WindowContainer>
        {/* how is gonna be */}
        <Subtitle>Player style:</Subtitle>
        <div
          className='p-5 flex flex-col items-center gap-4'
          style={{ backgroundColor: LABYRINTH_STYLES.pathColor }}
        >
          <h3 className='text-black font-bold'>This is how it will look</h3>
          <div
            className='w-10 aspect-square'
            style={{ backgroundColor: playerOptions.color }}
          />
        </div>
        {/* all styles avalible */}
        <div className='flex flex-col items-center gap-2'>
          <h3>Styles</h3>
          <div className='flex gap-4'>
            {PLAYER_STYLES.map(style => (
              <button
                key={style}
                style={{ backgroundColor: style }}
                className='w-6 aspect-square'
                onClick={handleColorSelected(style)}
              />
            ))}
          </div>
        </div>
      </WindowContainer>
    </PageSection>
  )
}

export default OptionsPlayer
