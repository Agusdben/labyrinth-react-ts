import { useState } from 'react'
import PageSection from '../../components/PageSection'
import PrevWindowButton from '../../components/PrevWindowButton'
import Title from '../../components/Title'
import WindowContainer from '../../components/WindowContainer'

const HowToPlay = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <PageSection>
      <Title>How to play</Title>
      <WindowContainer>
        <div
          className={`aspect-video ${
            isLoading ? 'animate-pulse' : ''
          } bg-zinc-700 rounded-md overflow-hidden shadow-md shadow-black`}
        >
          <iframe
            className='object-contain w-full h-full'
            src='https://www.youtube-nocookie.com/embed/9ZfNaMt4b04'
            title='How to play my game'
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <PrevWindowButton />
      </WindowContainer>
    </PageSection>
  )
}

export default HowToPlay
