import { useState } from 'react'
import { User } from '../../types'

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
    <form onSubmit={handleSubmitUser}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          onChange={handleChangeUsername}
          value={username}
          placeholder='Type here your username'
        />
      </div>
      <button type='submit'>Save</button>
    </form>
  )
}

export default UserForm
