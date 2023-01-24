import { useState } from 'react'
import { User } from '../../types'
import Button from '../Button'

interface Props {
  onSubmit: (user: User) => void
}

const UserForm = ({ onSubmit }: Props) => {
  const [username, setUsername] = useState<string>('')

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleSubmitUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newUser: User = {
      username
    }

    onSubmit(newUser)
  }

  return (
    <form onSubmit={handleSubmitUser} className='flex flex-col gap-4 '>
      <div className=' flex flex-col text-left gap-2'>
        <label htmlFor='username'>Username</label>
        <input
          className='p-2 bg-transparent focus:outline-none border-b-2 border-orange-300 placeholder:opacity-50 invalid:border-red-900 peer'
          id='username'
          type='text'
          onChange={handleChangeUsername}
          value={username}
          pattern={'^[a-zA-Z0-9-_]{3,}$'}
          placeholder='Type here your username'
        />
        <strong className='invisible peer-invalid:visible'>
          Minimum length is 3 characters/numbers, simbols: - _
        </strong>
      </div>
      <Button type='submit' disabled={false}>
        Register
      </Button>
    </form>
  )
}

export default UserForm
