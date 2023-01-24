import PageSection from '../../components/PageSection'
import PrevWindowButton from '../../components/PrevWindowButton'
import Title from '../../components/Title'
import WindowContainer from '../../components/WindowContainer'

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
        <PrevWindowButton />
      </WindowContainer>
    </PageSection>
  )
}

export default HowToPlay
