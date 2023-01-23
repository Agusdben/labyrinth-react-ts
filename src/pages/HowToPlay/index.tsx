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
        <iframe
          className='aspect-video'
          src='https://www.youtube-nocookie.com/embed/j06WpHqzJ4w?rel=0&amp;controls=1&amp;showinfo=0'
          title='How to play my game'
          allowFullScreen
        />
        {/* <ImageSlider images={images} /> */}
      </WindowContainer>
    </PageSection>
  )
}

export default HowToPlay
