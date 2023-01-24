import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/Button'
import Modal from '../../../../components/Modal'
import Subtitle from '../../../../components/Subtitle'
import { Modal as ModalI } from '../../../../types'

const ModalLeave = ({ handleModal, isOpen, title }: ModalI) => {
  const navigate = useNavigate()

  return (
    <Modal isOpen={isOpen} title={title} onClose={handleModal}>
      <div className='text-center flex flex-col gap-6'>
        <header>
          <Subtitle>Are you sure want to leave?</Subtitle>
          <strong className='text-red-700'>Your progess will not save</strong>
        </header>
        <div className='flex gap-4 items-center justify-center'>
          <Button type='button' onClick={handleModal}>
            Cancel
          </Button>
          <Button type='button' onClick={() => navigate('/menu/levels')}>
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalLeave
