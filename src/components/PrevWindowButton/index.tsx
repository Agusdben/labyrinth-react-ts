import useWindows from '../../hooks/useWindows'
import { TbArrowBackUp } from 'react-icons/tb'
import { Windows } from '../../types'
const PrevWindowButton = () => {
  const { handlePrevWindow, window, windowsHistory } = useWindows()
  return (
    <button
      type='button'
      className={`p-2 border-2 ${
        window === Windows.menu ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={windowsHistory.length > 2 ? () => {} : handlePrevWindow}
      disabled={windowsHistory.length > 2}
    >
      <TbArrowBackUp />
    </button>
  )
}

export default PrevWindowButton
