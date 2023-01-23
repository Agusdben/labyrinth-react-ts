import { useEffect } from 'react'
import ReactDOM from 'react-dom'

interface Props {
  children: React.ReactNode
  elementID: 'modal'
}

const el = document.createElement('div')

const Portal = ({ children, elementID }: Props) => {
  const portalRoot = document.getElementById(elementID)

  useEffect(() => {
    if (!portalRoot || !children) return
    portalRoot.appendChild(el)

    return () => {
      portalRoot.removeChild(el)
    }
  }, [children, elementID])

  return ReactDOM.createPortal(children, el)
}

export default Portal
