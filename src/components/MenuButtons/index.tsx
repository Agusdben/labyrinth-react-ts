interface Props {
  onClick: () => void
  value: string
}

const MenuButtons = ({ onClick, value }: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='border-current border-2 px-6 py-2 hover:text-zinc-900 hover:bg-zinc-200'
    >
      {value}
    </button>
  )
}

export default MenuButtons
