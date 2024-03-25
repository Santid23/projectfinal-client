import { Flex, Box, Text,  Grid } from "@chakra-ui/layout"
import CustomLink from "../CustomLink/CustomLink"



const Footer = () => {
  const FOOTER_LINKS = [
      {
          link: "/use_terms",
          text: "Terminos de uso",
          id: 1,
      },
      {
          link: "/privacity",
          text: "Politica de privacidad",
          id: 2
      }, {
          link: "/legal_info",
          text: "Aviso legal",
          id: 3
      }, {
          link: "/cookies",
          text: "Cookies",
          id: 4
      },
  ]
  return (
      <Flex
          padding={"20px"}
          justifyContent={'space-between'}
          alignItems={"center"}
          backgroundColor={"#ffc300"}
      >
          {FOOTER_LINKS.map(({ link, text, id }) => {
              return (
                  <CustomLink to={link}  key={id} padding={"20px"}>{text}</CustomLink>
              )
          })}
      </Flex>
  )
}

export default Footer