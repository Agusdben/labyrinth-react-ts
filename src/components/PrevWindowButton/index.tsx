import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import MenuButton from '../MenuButton'

const PrevWindowButton = () => {
  const location = useLocation()
  const [prevLocation, setPrevLocation] = useState<string>('')

  useEffect(() => {
    const getPrevLocation = () => {
      const prevPathsNames = location.pathname.split('/').slice(0, -1)
      const prevPathLocation = prevPathsNames.map((path, index) => {
        const isLast = index === prevPathsNames.length - 1
        return !isLast ? path + '/' : path
      })

      return prevPathLocation.join('')
    }
    setPrevLocation(getPrevLocation())

    return () => setPrevLocation('')
  }, [location])

  return (
    <div className='mt-auto mr-auto'>
      <MenuButton route={prevLocation} value='Back' />
    </div>
  )
}

export default PrevWindowButton
