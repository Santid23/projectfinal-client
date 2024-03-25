import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider } from "@chakra-ui/react"
import React from "react"
// import LikeIcon from "../LikeIcon/LikeIcon"

const CompetitionCard = ({ image, title, handleLike }) => {
  return (
    <Card maxW='sm' cursor={"pointer"}
      borderRadius={"30px"}
      w={"100%"}
      h={["400px", "500px", "550px"]}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      position={"relative"}
      backgroundImage={image}>
      <CardBody>
        
      </CardBody>
    
      <CardFooter>
      
        <ButtonGroup spacing='2'>
          <Button variant='solid' backgroundColor='#FFC300' color={"white"} >
            {title}
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}





export default CompetitionCard



