import PageSection from '../../components/PageSection'
import PrevWindowButton from '../../components/PrevWindowButton'
import Title from '../../components/Title'
import WindowContainer from '../../components/WindowContainer'
import ResolutionSelect from './Components/ResolutionSelect'

const OptionsGraphics = () => {
  return (
    <PageSection>
      <Title>Graphics options</Title>
      <WindowContainer>
        <ResolutionSelect />
        <PrevWindowButton />
      </WindowContainer>
    </PageSection>
  )
}

export default OptionsGraphics
