import { useState } from 'react'
import { Modal } from '../types'

interface Props {
  title: string
}

const useModal = ({ title = '' }: Props): Modal => {
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
