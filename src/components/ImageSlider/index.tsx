import { useState } from 'react'

interface Props {
  images: Array<string>
}

const ImageSlider = ({ images }: Props) => {
  const [index, setIndex] = useState<number>(0)

  const handleNext = () => {
    setIndex(index => {
      if (index < images.length - 1) {
        index += 1
      } else {
        index = 0
      }
      return index
    })
  }

  const handlePrev = () => {
    setIndex(index => {
      if (index > 0) {
        index -= 1
      } else {
        index = images.length - 1
      }
      return index
    })
  }

  const handleCustumIndex = (i: number) => {
    setIndex(i)
  }

  return (
    <div className='flex flex-col gap-2 w-full h-full'>
      <picture className='flex-1 overflow-hidden p-4'>
        <img
          className='h-full w-full object-contain transition-opacity duration-500'
          loading='lazy'
          src={images[index]}
          alt={images[index]}
        />
      </picture>
      {/* feedback total images and selected and controlls*/}
      <div className='flex justify-center items-center gap-4'>
        <button onClick={handlePrev} className=''>
          &lt;
        </button>
        {images.map((img, i) => {
          const isImgSelected = index === i
          return (
            <button
              onClick={() => handleCustumIndex(i)}
              key={img + i}
              className={`w-3 aspect-square outline outline-2 outline-offset-2 outline-zinc-200 ${
                isImgSelected ? 'bg-zinc-200' : ''
              }`}
            />
          )
        })}
        <button onClick={handleNext} className=''>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default ImageSlider
