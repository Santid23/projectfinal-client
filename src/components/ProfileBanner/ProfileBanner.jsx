import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react"
import EditPenIcon from "../EditPenIcon/EditPenIcon"
import DeleteIcon from "../DeleteIcon/DeleteIcon"
import CustomForm from "../CustomForm/CustomForm"
import CustomLink from "../CustomLink/CustomLink"

const ProfileBanner = ({
  avatar,
  username,
  email,
  handleUserEdit,
}) => {
  return (
    <Flex justifyContent={"center"}>
      <Flex
        w={"100%"}
        maxW={"1280px"}
        minH={"450px"}
        padding={"80px 52px"}
        alignItems={"center"}
        borderRadius={"30px"}
        position={"relative"}
        gap={"80px"}
        boxShadow={"0px 0px 5px 0px rgba(0, 0, 0, 0.25);"}
      >
        <Avatar width={"290px"} height={"290px"} src={avatar} />
        <Flex flexDir={"column"} gap={"25px"}>
          <Text fontSize={"32px"} fontWeight={"bold"}>
            Mi cuenta
          </Text>
          <Text fontSize={"25px"} >
            Nombre de usuario: {username}
          </Text>
          <Text fontSize={"25px"} >
            Email: {email}
          </Text>
          
        </Flex>
        <Flex gap={"18px"} position={"absolute"} top={"24px"} right={"24px"}>
          
        </Flex>
      </Flex>
    </Flex>
    
    
  )
}

export default ProfileBanner
