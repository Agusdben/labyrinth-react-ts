import useWindows from '../../hooks/useWindows'
import { TbArrowBackUp } from 'react-icons/tb'
const PrevWindowButton = () => {
  const { handlePrevWindow } = useWindows()
  return (
    <button type='button' className='p-2 border-2' onClick={handlePrevWindow}>
      <TbArrowBackUp />
    </button>
  )
}

export default PrevWindowButton
