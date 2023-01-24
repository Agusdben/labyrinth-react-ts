import React from 'react'

interface Props {
  children: React.ReactNode | string
  type: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

const Button = ({ children, disabled = false, type, onClick }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className='rounded-md text-center text-orange-300 font-bold border-orange-300 border-2 px-6 py-2 max-w-xs w-full m-auto disabled:opacity-60 enabled:hover:text-zinc-900 enabled:hover:bg-orange-300'
    >
      {children}
    </button>
  )
}

export default Button
