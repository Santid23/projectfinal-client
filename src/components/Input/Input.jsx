import { Input as ChakraInput } from "@chakra-ui/react"

const Input = ({ placeholder, onChange, ...props }) => {
  return (
    <ChakraInput
      onChange={onChange}
      minH={"7px"}
      fontWeight={"bold"}
      fontSize={"15px"}
      borderRadius={"15px"}
      backgroundColor={"#D9D9D9"}
      boxShadow={"none"}
      _placeholder={{ color: "#767676" }}
      _focus={{ boxShadow: "black" }}
      placeholder={placeholder}
      {...props}
    />
  )
}

export default Input
