import React from 'react'
interface Props {
  children: React.ReactNode
}
const PageSection = ({ children }: Props) => {
  return (
    <section className='m-auto relative flex flex-col gap-4 p-4 bg-zinc-800 rounded-lg shadow-lg shadow-black'>
      {children}
    </section>
  )
}

export default PageSection
