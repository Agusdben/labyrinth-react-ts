import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/Button'
import Modal from '../../../../components/Modal'
import useLabyrinth from '../../../../hooks/useLabyrinth'
import useLevel from '../../../../hooks/useLevel'
import useModal from '../../../../hooks/useModal'
import usePlayer from '../../../../hooks/usePlayer'
import useSaveGame from '../../../../hooks/useSaveGame'
import useUser from '../../../../hooks/useUser'

const ModalLabyrinthCompleted = () => {
  const { level, setLevel } = useLevel()
  const { player, isInExit } = usePlayer()
  const { resetLabyrinth } = useLabyrinth()
  const { isOpen, handleModal, title } = useModal({
    title: 'Level completed'
  })
  const { saveGame } = useSaveGame()

  const navigate = useNavigate()

  const { user } = useUser()

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
      <div className='flex flex-col gap-10'>
        <p className='text-2xl text-center'>
          Nice work <span className='text-orange-300'>{user.username}!</span>
        </p>
        <div className='m-auto'>
          <Button type='button' onClick={onClose}>
            Continue
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalLabyrinthCompleted
