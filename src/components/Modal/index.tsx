import Portal from '../../Poral'
import Subtitle from '../Subtitle'
import { AiOutlineCloseCircle } from 'react-icons/ai'
interface Props {
  children: React.ReactNode
  onClose: () => void
  isOpen: boolean
  title: string
}

const Modal = ({ children, onClose, isOpen, title = '' }: Props) => {
  return (
    <Portal elementID='modal'>
      {isOpen ? (
        <section className='fixed top-0 left-0 w-screen h-screen grid place-content-center'>
          <article className='min-w-[300px] rounded-md bg-zinc-800 relative z-10 overflow-hidden'>
            <header className='bg-orange-300 text-zinc-900 font-bold flex justify-between items-center px-4 py-2 capitalize'>
              <Subtitle>{title}</Subtitle>
              <button
                type='button'
                className='text-3xl text-center hover:brightness-50'
                onClick={onClose}
              >
                <AiOutlineCloseCircle />
              </button>
            </header>
            <div className='px-4 py-2 text-zinc-200'>{children}</div>
          </article>
          <button
            type='button'
            onClick={onClose}
            className='absolute cursor-default top-0 left-0 w-screen h-screen bg-black opacity-60'
          />
        </section>
      ) : null}
    </Portal>
  )
}

export default Modal
