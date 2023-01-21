import React from 'react'
import RESOLUTIONS from '../../constants/resoloutions'
import useOptions from '../../hooks/useOptions'
import { Dimension } from '../../types'

const ResolutionSelect = () => {
  const { setResolution } = useOptions()
  const handleResolution = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    const resArr: Array<number> = value.split('x').map(val => Number(val))
    const res: Dimension = { width: resArr[0], height: resArr[1] }
    setResolution(res)
  }
  return (
    <div className='flex gap-2'>
      <p>Resolution:</p>
      <select className='bg-transparent' onChange={e => handleResolution(e)}>
        {RESOLUTIONS.map(res => {
          const resolution: string = `${res.width}x${res.height}`
          return (
            <option
              className='text-zinc-900'
              key={resolution}
              value={resolution}
            >
              {res.width}x{res.height}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default ResolutionSelect
