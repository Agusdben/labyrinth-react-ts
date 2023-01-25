import LEVELS from '../../constants/levels'
import useLevel from '../../hooks/useLevel'
import WindowContainer from '../../components/WindowContainer'
import PageSection from '../../components/PageSection'
import Title from '../../components/Title'
import MenuButton from '../../components/MenuButton'
import { useState } from 'react'
import { AiFillLock, AiOutlineCheckSquare } from 'react-icons/ai'
import useSaveGame from '../../hooks/useSaveGame'
import PrevWindowButton from '../../components/PrevWindowButton'
import { useEffect } from 'react'

const Levels = () => {
  const { setLevel } = useLevel()
  const { getSavedGame } = useSaveGame()
  const [levelSelected, setLevelSelected] = useState<number>(getSavedGame())

  const handleLevelSelected = (level: number) => () => {
    setLevel(level)
    setLevelSelected(level)
  }

  useEffect(() => {
    setLevel(levelSelected)
  }, [])

  return (
    <PageSection>
      <Title>Levels</Title>
      <WindowContainer>
        <ul className='flex-1 grid grid-cols-3 gap-4 overflow-y-auto px-2'>
          {LEVELS.map(l => {
            const lastLevelCompleted = getSavedGame()
            const isNew = l.level > lastLevelCompleted
            const isBlocked = l.level - 1 > lastLevelCompleted
            const isLevelSelected = l.level === levelSelected
            return (
              <li
                className='border grid p-2 aspect-square relative'
                key={l.level}
              >
                {!isBlocked && !isLevelSelected ? (
                  <p className='absolute top-1 right-1 '>
                    {isNew ? (
                      <span className='animate-pulse'>New!</span>
                    ) : (
                      <AiOutlineCheckSquare />
                    )}
                  </p>
                ) : null}
                <button
                  className={`${
                    isLevelSelected ? 'bg-orange-300 text-zinc-900' : ''
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
        <div className='grid grid-cols-2 gap-4'>
          <PrevWindowButton />
          <MenuButton
            disabled={levelSelected < 1}
            route={`/labyrinth/${levelSelected}`}
            value='Go!'
          />
        </div>
      </WindowContainer>
    </PageSection>
  )
}

export default Levels
