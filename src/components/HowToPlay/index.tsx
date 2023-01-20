import { Dimension } from '../../types'
import fer from '../../assets/tutorial/fer.png'
import ferRuedas from '../../assets/tutorial/Fernando_envalido.png'
import ImageSlider from '../ImageSlider'
const images = [fer, ferRuedas]

const HowToPlay = ({ height, width }: Dimension) => {
  return (
    <div style={{ width, height }}>
      <ImageSlider images={images} />
    </div>
  )
}

export default HowToPlay
