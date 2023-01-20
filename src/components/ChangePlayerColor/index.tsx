import { useState } from 'react'
import { LABYRINTH_STYLES, PLAYER_STYLES } from '../../constants/styles'
import useOptions from '../../hooks/useOptions'
import { Dimension } from '../../types'
import MenuButtons from '../MenuButtons'

const ChangePlayerColor = ({ width, height }: Dimension) => {
  const { playerOptions, setPlayerColor } = useOptions()
  const [colorSelected, setColorSelected] = useState<string>(
    playerOptions.color
  )

  const handleColorSelected = (style: string) => () => {
    setColorSelected(style)
  }

  const handleSaveColor = () => {
    setPlayerColor(colorSelected)
  }

  return (
    <div
      style={{ width, height }}
      className='flex flex-col items-center justify-center gap-10'
    >
      {/* how is gonna by */}
      <div
        className='p-5 flex flex-col items-center gap-4'
        style={{ backgroundColor: LABYRINTH_STYLES.pathColor }}
      >
        <h3 className='text-black font-bold'>This is how it will look</h3>
        <div
          className='w-10 aspect-square'
          style={{ backgroundColor: colorSelected }}
        />
      </div>
      {/* all styles avalible */}
      <div className='flex flex-col items-center gap-2'>
        <h3>Styles</h3>
        <div className='flex gap-4'>
          {PLAYER_STYLES.map(style => (
            <button
              key={style}
              style={{ backgroundColor: style }}
              className='w-6 aspect-square'
              onClick={handleColorSelected(style)}
            />
          ))}
        </div>
      </div>
      <div>
        <MenuButtons onClick={handleSaveColor} value='Save' />
      </div>
    </div>
  )
}

export default ChangePlayerColor
