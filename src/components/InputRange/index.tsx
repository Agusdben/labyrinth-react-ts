import React from 'react'

interface Props {
  tag: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  min: number
  max: number
  step: number
  value: number
}

const InpurRange = ({ tag, onChange, min, max, step, value }: Props) => {
  return (
    <div className='flex justify-between gap-4'>
      <p>{tag}</p>
      <div className='flex gap-2'>
        <input
          className='accent-orange-300'
          type='range'
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
        />
        <p className='w-[3ch]'>{Math.round(value * 100)}</p>
      </div>
    </div>
  )
}

export default InpurRange
