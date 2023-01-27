import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import MenuButton from '../MenuButton'

const PrevWindowButton = () => {
  const location = useLocation()
  const [prevLocation, setPrevLocation] = useState<string>('')

  useEffect(() => {
    const getPrevLocation = (): string => {
      const locationArr = location.pathname.split('/')
      locationArr.pop()
      return locationArr.join('/')
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
