import { Flex, Text } from "@chakra-ui/layout"
import CustomLink from "../CustomLink/CustomLink"

const AuthLink = ({ onClick, children, to }) => {
  return (
    <CustomLink
      onClick={onClick}
      borderRadius="30px"
      padding={"10px 20px"}
      backgroundColor={"#ffc300"}
      color={"white"}
      to={to}
    >
      <Flex justify={"center"} alignItems={"center"}>
        <Text as={"span"} fontSize={"15px"}>
          {children}
        </Text>
      </Flex>
    </CustomLink>
  )
}

export default AuthLink
