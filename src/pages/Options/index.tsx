import PageSection from '../../components/PageSection'
import WindowContainer from '../../components/WindowContainer'
import MenuButton from '../../components/MenuButtons'
import Title from '../../components/Title'

const Options = () => {
  return (
    <PageSection>
      <Title>Options</Title>
      <WindowContainer>
        <MenuButton route='/menu/options/player' value='Player' />
        <MenuButton route='/menu/options/graphics' value='Graphics' />
        <MenuButton route='/menu/options/sound' value='Sound' />
      </WindowContainer>
    </PageSection>
  )
}

export default Options
