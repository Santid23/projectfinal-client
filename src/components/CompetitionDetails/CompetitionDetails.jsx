import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import PenEditIcon from "../PenEditIcon/PenEditIcon"
import ButtonDelete from "../ButtonDelete/ButtonDelete"

const CompetitionDetails = ({ onOpen, competitionDetails }) => {
  return (
    <Flex marginBottom={"80px"} w={"50%"} justify={"center"}>
      <Flex
        position={"relative"}
        gap={"20px"}
        minW={"550px"}
        maxHeight={"800px"}
        padding={"84px 47px"}
        border={"1px solid rgba(0,0,0,0.2)"}
        borderRadius={"20px"}
        flexDir={"column"}
      >
        {competitionDetails.map(({ name, content }) => {
          return (
            <Box key={name}>
              { (
                <Text>
                  <Text as={"span"} fontWeight={"bold"}>
                    {name}:{" "}
                  </Text>
                  {content}
                </Text>
              )}
            </Box>
          )
        })}
        <PenEditIcon onClick={onOpen} />
        <ButtonDelete  />
      </Flex>
    </Flex>
  )
}

export default CompetitionDetails
