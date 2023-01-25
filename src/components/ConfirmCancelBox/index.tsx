import Button from '../Button'

interface Props {
  onConfirm: () => void
  onCancel: () => void
}
const ConfirmCancelBox = ({ onConfirm, onCancel }: Props) => {
  return (
    <div className='grid grid-cols-2 gap-4 font-bold [&_button]:border-2 [&_button]:rounded-md [&_button]:py-2'>
      <Button type='button' onClick={onCancel}>
        cancel
      </Button>
      <div className='bg-orange-300 [&_button]:text-zinc-900 rounded-md '>
        <Button type='button' onClick={onConfirm}>
          Confirm
        </Button>
      </div>
    </div>
  )
}

export default ConfirmCancelBox
