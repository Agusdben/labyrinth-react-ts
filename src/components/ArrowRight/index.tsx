import React from 'react'
import { ArrowSvgProps } from '../../types'

const ArrowRight = ({ className, stroke = '#292929' }: ArrowSvgProps) => {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_429_11242)'>
        <path
          d='M4 4H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V4Z'
          stroke={stroke}
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11 15L14 12L11 9'
          stroke={stroke}
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_429_11242'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ArrowRight
