import PageSection from '../../components/PageSection'
import WindowContainer from '../../components/WindowContainer'
import MenuButton from '../../components/MenuButton'
import Title from '../../components/Title'
import PrevWindowButton from '../../components/PrevWindowButton'

const Options = () => {
  return (
    <PageSection>
      <Title>Options</Title>
      <WindowContainer>
        <MenuButton route='/menu/options/graphics' value='Graphics' />
        <MenuButton route='/menu/options/sound' value='Sound' />
        <MenuButton route='/menu/options/player' value='Player' />
        <div className='mt-auto mr-auto'>
          <PrevWindowButton />
        </div>
      </WindowContainer>
    </PageSection>
  )
}

export default Options
