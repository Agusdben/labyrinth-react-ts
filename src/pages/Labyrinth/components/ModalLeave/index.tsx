import { useNavigate } from 'react-router-dom'
import ConfirmCancelBox from '../../../../components/ConfirmCancelBox'
import Modal from '../../../../components/Modal'
import Subtitle from '../../../../components/Subtitle'
import useLabyrinth from '../../../../hooks/useLabyrinth'
import { Modal as ModalI } from '../../../../types'

const ModalLeave = ({ handleModal, isOpen, title }: ModalI) => {
  const navigate = useNavigate()
  const { resetLabyrinth } = useLabyrinth()

  const handleConfirm = () => {
    resetLabyrinth()
    navigate('/menu/levels')
  }

  return (
    <Modal isOpen={isOpen} title={title} onClose={handleModal}>
      <div className='text-center flex flex-col gap-6'>
        <header className='font-bold'>
          <Subtitle>Are you sure want to leave?</Subtitle>
          <strong className='text-red-700'>Your progess will not save</strong>
        </header>
        <ConfirmCancelBox onCancel={handleModal} onConfirm={handleConfirm} />
      </div>
    </Modal>
  )
}

export default ModalLeave
