import PageSection from '../../../../components/PageSection'
import Title from '../../../../components/Title'
import UserForm from '../../../../components/UserForm'
import WindowContainer from '../../../../components/WindowContainer'
import useUser from '../../../../hooks/useUser'

const UserRegistration = () => {
  const { setUser } = useUser()
  return (
    <PageSection>
      <Title>Register</Title>
      <WindowContainer>
        <UserForm onSubmit={setUser} />
      </WindowContainer>
    </PageSection>
  )
}

export default UserRegistration
