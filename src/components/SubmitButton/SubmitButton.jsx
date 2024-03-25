import { Button as ChakraButton } from "@chakra-ui/react"
import React from "react"

const SubmitButton = () => {
  return (
    <ChakraButton
      _hover={{
        backgroundColor: "brown",
      }}
      minH={"56px"}
      width={"100%"}
      fontSize={"20px"}
      marginTop={"54px"}
      borderRadius={"15px"}
      backgroundColor={"#FEC202"}
      fontWeight={"bold"}
      color={"white"}
      type="submit"
    >
      Enviar
    </ChakraButton>
  )
}

export default SubmitButton
