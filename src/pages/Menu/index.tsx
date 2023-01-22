import WindowContainer from '../../components/WindowContainer'
import MenuButton from '../../components/MenuButtons'
import PageSection from '../../components/PageSection'
import Title from '../../components/Title'

const Menu = () => {
  return (
    <PageSection>
      <Title>Menu</Title>
      <WindowContainer>
        <div className='flex flex-col gap-4'>
          <MenuButton value='Play!' route='/levels' />
          <MenuButton value='Options' route='/options' />
          <MenuButton value='How to play' route='/how' />
        </div>
      </WindowContainer>
    </PageSection>
  )
}

export default Menu
