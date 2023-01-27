const Footer = () => {
  return (
    <footer className='text-zinc-200 font-light p-5'>
      <p className='gap-2 items-center text-center'>
        Made with <span className='text-red-500'> ♥ </span>by
        <a
          href='https://agustindibenedetto.netlify.app/'
          target='_black'
          rel='noreferrer noopener'
          className='text-orange-300 font-bold'
        >
          {' '}
          Agustin Di Benedetto
        </a>
      </p>
    </footer>
  )
}

export default Footer
