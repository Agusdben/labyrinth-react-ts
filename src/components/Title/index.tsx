import React from 'react'

interface Props {
  children: React.ReactNode
}
const Title = ({ children }: Props) => {
  return <h2 className='text-2xl'>{children}</h2>
}

export default Title
