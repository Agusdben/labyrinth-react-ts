import fer from '../../assets/tutorial/fer.png'
import ferRuedas from '../../assets/tutorial/Fernando_envalido.png'
import useOptions from '../../hooks/useOptions'
import ImageSlider from '../ImageSlider'
const images = [fer, ferRuedas]

const HowToPlay = () => {
  const { resolution } = useOptions()
  return (
    <div style={{ width: resolution.width, height: resolution.height }}>
      <ImageSlider images={images} />
    </div>
  )
}

export default HowToPlay
