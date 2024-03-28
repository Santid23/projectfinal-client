import { Flex } from "@chakra-ui/react"
import React from "react"
import Title from "../Title/Title"
import RestaurantsGrid from "../CompetitionsGrid/CompetitionsGrid"

const FavoriteRestaurants = ({ favoriteRestaurants }) => {
  return (
    <Flex flexDir={"column"} gap={"80px"}>
      <Title fontSize="32px">Tus competiciones que quieres apuntarte</Title>
      <RestaurantsGrid restaurants={favoriteRestaurants} />
    </Flex>
  )
}

export default FavoriteRestaurants
