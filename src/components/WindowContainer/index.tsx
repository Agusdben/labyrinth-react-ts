import React from 'react'
import useOptions from '../../hooks/useOptions'

interface Props {
  children: React.ReactNode
}

const WindowContainer = ({ children }: Props) => {
  const { resolution } = useOptions()

  return (
    <article
      className='flex flex-col gap-4 justify-center m-auto animate-smoothOpacityIncrease'
      style={{ width: resolution.width, height: resolution.height }}
    >
      {children}
    </article>
  )
}

export default WindowContainer
