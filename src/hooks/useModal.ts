import { useState } from 'react'

interface Props {
  title: string
}

const useModal = ({ title = '' }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleModal = () => {
    setIsOpen(last => !last)
  }

  return {
    isOpen,
    title,
    handleModal
  }
}

export default useModal
