import React from 'react'
import RESOLUTIONS from '../../../../constants/resoloutions'
import useOptions from '../../../../hooks/useOptions'
import { Dimension } from '../../../../types'

const ResolutionSelect = () => {
  const { setResolution, resolution } = useOptions()
  const handleResolution = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    const resArr: Array<number> = value.split('x').map(val => Number(val))
    const res: Dimension = { width: resArr[0], height: resArr[1] }
    setResolution(res)
  }
  return (
    <div className='flex gap-10 justify-center items-center'>
      <p>Resolution:</p>
      <select
        defaultValue={`${resolution.width}x${resolution.height}`}
        className='bg-transparent border-2 border-orange-300 px-6 py-2 hover:cursor-pointer focus:outline-none'
        onChange={e => handleResolution(e)}
      >
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
