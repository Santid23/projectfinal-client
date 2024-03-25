import { Grid } from "@chakra-ui/react"
import React from "react"
import CompetitionCard from "../CompetitionCard/CompetitionCard"
import CustomLink from "../CustomLink/CustomLink"

const CompetitionsGrid = ({ competitions }) => {
  const handleLike = (e) => {
    e.preventDefault()
  }

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gap={"40px"}
    >
      {competitions.map(({ title, _id, image }) => {
        return (
          <CustomLink key={_id} to={`/competitions/${_id}`}>
            <CompetitionCard
              key={_id}
              title={title}
              image={image}
              handleLike={handleLike}
            />
          </CustomLink>
        )
      })}
    </Grid>
  )
}

export default CompetitionsGrid
