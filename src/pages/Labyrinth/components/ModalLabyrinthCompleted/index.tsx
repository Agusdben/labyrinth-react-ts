import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../../../components/Modal'
import useLabyrinth from '../../../../hooks/useLabyrinth'
import useLevel from '../../../../hooks/useLevel'
import useModal from '../../../../hooks/useModal'
import usePlayer from '../../../../hooks/usePlayer'
import useSaveGame from '../../../../hooks/useSaveGame'

const ModalLabyrinthCompleted = () => {
  const { level } = useLevel()
  const { player, isInExit } = usePlayer()
  const { resetLabyrinth } = useLabyrinth()
  const { isOpen, handleModal, title } = useModal({
    title: ''
  })
  const { saveGame } = useSaveGame()
  const navigate = useNavigate()

  useEffect(() => {
    if (isInExit()) handleModal()
  }, [player])

  const onClose = () => {
    resetLabyrinth()
    saveGame(level)
    navigate('/menu/levels')
    handleModal()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <p>{`Level ${level + 1} completed`}</p>
    </Modal>
  )
}

export default ModalLabyrinthCompleted
