import Button from '../../../../components/Button'
import useModal from '../../../../hooks/useModal'
import ModalLeave from '../ModalLeave'
import { BiRun } from 'react-icons/bi'

const LeaveButton = () => {
  const modal = useModal({ title: 'Leave' })
  return (
    <div>
      <button
        className='text-red-500 text-xl grid border-2 p-2 border-current rounded-md'
        type='button'
        onClick={modal.handleModal}
      >
        <BiRun />
      </button>
      <ModalLeave {...modal} />
    </div>
  )
}

export default LeaveButton
