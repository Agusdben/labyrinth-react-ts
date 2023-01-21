import RESOLUTIONS from '../../constants/resoloutions'
import useOptions from '../../hooks/useOptions'
import { Dimension } from '../../types'
import ResolutionSelect from '../ResolutionSelect'

const Graphics = () => {
  const { resolution, setResolution } = useOptions()

  return (
    <div
      style={{ width: resolution.width, height: resolution.height }}
      className='flex flex-col items-center gap-10'
    >
      <ResolutionSelect />
    </div>
  )
}

export default Graphics
