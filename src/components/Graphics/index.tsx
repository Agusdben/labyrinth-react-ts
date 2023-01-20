import RESOLUTIONS from '../../constants/resoloutions'
import useOptions from '../../hooks/useOptions'
import { Dimension } from '../../types'

const Graphics = () => {
  const { resolution, setResolution } = useOptions()

  const handleResolution = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    const resArr: Array<number> = value.split('x').map(val => Number(val))
    const res: Dimension = { width: resArr[0], height: resArr[1] }
    setResolution(res)
  }

  return (
    <div
      style={{ width: resolution.width, height: resolution.height }}
      className='flex flex-col items-center justify-center gap-10'
    >
      <select onChange={e => handleResolution(e)}>
        {RESOLUTIONS.map(res => {
          const resolution: string = `${res.width}x${res.height}`
          return (
            <option key={resolution} value={resolution}>
              {res.width}x{res.height}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Graphics
