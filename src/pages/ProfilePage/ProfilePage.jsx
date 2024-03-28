import { Flex, Text } from "@chakra-ui/react"
import PageWrapper from "../../components/PageWrapper/PageWrapper"
import Title from "../../components/Title/Title"
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner"
import FavoriteCompetitions from "../../components/FavoriteCompetitions/FavoriteCompetitions"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const ProfilePage = () => {
  const { user } = useContext(AuthContext)
  const { username, email, avatar, favoriteCompetitions } = user

  const handleUserEdit = () => {}
  const handleUserDeletion = () => {}

  return (
    <PageWrapper>
      <Flex flexDir={"column"} gap={"44px"}>
        <Title>Hola {username}!</Title>
        <ProfileBanner
          username={username}
          email={email}
          avatar={avatar}
          handleUserDeletion={handleUserDeletion}
          handleUserEdit={handleUserEdit}
        />
        {favoriteCompetitions.length !== 0 ? (
          <FavoriteCompetitions favoriteCompetitions={favoriteCompetitions} />
        ) : (
          <Text>No tienes competiciones a la vista</Text>
        )}
      </Flex>
    </PageWrapper>
  )
}

export default ProfilePage
