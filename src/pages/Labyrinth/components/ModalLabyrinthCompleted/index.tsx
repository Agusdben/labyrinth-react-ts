import { useEffect } from 'react'
import Modal from '../../../../components/Modal'
import useLevel from '../../../../hooks/useLevel'
import useModal from '../../../../hooks/useModal'
import usePlayer from '../../../../hooks/usePlayer'

const ModalLabyrinthCompleted = () => {
  const { level } = useLevel()
  const { player, isInExit } = usePlayer()
  const { isOpen, handleModal, title } = useModal({
    title: ''
  })

  useEffect(() => {
    if (isInExit()) handleModal()
  }, [player])

  const onClose = () => {
    // cositas chulas ⬇
    // * * * * * * * * *
    handleModal()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <p>{`Level ${level + 1} completed`}</p>
    </Modal>
  )
}

export default ModalLabyrinthCompleted
