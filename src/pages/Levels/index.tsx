import LEVELS from '../../constants/levels'
import useLevel from '../../hooks/useLevel'
import WindowContainer from '../../components/WindowContainer'
import PageSection from '../../components/PageSection'
import Title from '../../components/Title'
import MenuButton from '../../components/MenuButtons'
import { useState } from 'react'
import { AiFillLock } from 'react-icons/ai'

const Levels = () => {
  const [levelSelected, setLevelSelected] = useState<number>(-1)
  const { setLevel } = useLevel()

  const handleLevelSelected = (level: number) => () => {
    setLevel(level)
    setLevelSelected(level)
  }

  return (
    <PageSection>
      <Title>Levels</Title>
      <WindowContainer>
        <ul className='flex-1 grid grid-cols-3 gap-4 overflow-y-auto px-2'>
          {LEVELS.map(l => {
            const isBlocked = l.level > 2
            const isLevelSelected = l.level === levelSelected
            return (
              <li className='border grid p-2 aspect-square' key={l.level}>
                <button
                  className={`${
                    isLevelSelected ? 'bg-zinc-200 text-zinc-900' : ''
                  } `}
                  disabled={isBlocked}
                  onClick={
                    !isBlocked ? handleLevelSelected(l.level) : undefined
                  }
                >
                  {isBlocked ? (
                    <AiFillLock className='w-full' />
                  ) : (
                    <p>
                      level <span>{l.level}</span>
                    </p>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
        <MenuButton
          disabled={levelSelected < 1}
          route={`/labyrinth/${levelSelected}`}
          value='Go!'
        />
      </WindowContainer>
    </PageSection>
  )
}

export default Levels
