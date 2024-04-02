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

  const AVATAR_IMAGE =
"https://www.mundodeportivo.com/alfabeta/hero/2022/11/Goku-dragon-ball-principal-heroe-2.jpg?width=1200&aspect_ratio=16:9"
  const handleUserEdit = () => {}
  const handleUserDeletion = () => {}

  return (
    <PageWrapper>
      <Flex flexDir={"column"} gap={"44px"}>
        <Title>Hola {username}!
        <br /> 
        Es hora de empezar a pasarselo bien 💪🦍 </Title>
        <ProfileBanner
         username={username}
          email={email}
          avatar={AVATAR_IMAGE}
          handleUserDeletion={handleUserDeletion}
          handleUserEdit={handleUserEdit}
        />
        
      </Flex>
    </PageWrapper>
  )
}

export default ProfilePage
