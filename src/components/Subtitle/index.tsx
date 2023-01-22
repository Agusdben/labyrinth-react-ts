import React from 'react'

interface Props {
  children: React.ReactNode
}
const Subtitle = ({ children }: Props) => {
  return <h3 className='text-xl'>{children}</h3>
}

export default Subtitle
