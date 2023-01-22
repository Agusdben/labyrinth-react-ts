import ImageSlider from '../../components/ImageSlider'
import PageSection from '../../components/PageSection'
import Title from '../../components/Title'
import WindowContainer from '../../components/WindowContainer'
import fer from '../../assets/tutorial/fer.png'
import ferRuedas from '../../assets/tutorial/Fernando_envalido.png'
const images = [fer, ferRuedas]

const HowToPlay = () => {
  return (
    <PageSection>
      <Title>How to play</Title>
      <WindowContainer>
        <ImageSlider images={images} />
      </WindowContainer>
    </PageSection>
  )
}

export default HowToPlay
