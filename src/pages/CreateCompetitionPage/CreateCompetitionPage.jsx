import React, { useState } from "react"
import FormPageLayout from "../../components/FormPageLayout/FormPageLayout"
import { Flex, Text } from "@chakra-ui/layout"
import Input from "../../components/Input/Input"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import competitionsService from "../../services/competitions.service"
import { Toast } from "@chakra-ui/react"

const IMAGE =
  "https://farm66.staticflickr.com/65535/53515708112_387fef51e4_b.jpg"

const OPTIONS = ["title", "province", "city", "image", "status", "dueDate", "description", "days"]

function CreateCompetitionPage() {
  const [competitionData, setCompetitionData] = useState({
    title: "",
    province: "",
    city: "",
    image: "",
    status: "",
    dueDate: "",
    description: "",
    days: ""
  })

  const title = "Crear"
  const subtitle = "Crea tu propia competición"

  const onChange = (e) => {
    const { title, value } = e.target
    let update = { [title]: value }
    setCompetitionData({ ...competitionData, ...update })
  }

  const onSubmit = async (e) => {
    try {
      e.preventDefault()
      console.log("create", competitionData)
      await competitionsService.creatCompetition(competitionData)
      setCompetitionData({
        title: "",
        province: "",
        city: "",
        image: "",
        status: "",
        dueDate: "",
        description: "",
        days: ""
      })
      Toast({
        title: "Competición creada!",
        description: "Hemos creado la competición perfectamente",
        status: "success",
        duration: 4000,
        isClosable: true,
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <FormPageLayout backgroundImage={IMAGE}>
      <Flex minW={"400px"} maxW={"400px"} flexDir={"column"}>
        <Text textAlign={"center"} fontSize={"32px"} fontWeight={"bold"}>
          {title}
        </Text>
        {subtitle && (
          <Text textAlign={"center"} fontSize={"15px"}>
            {subtitle}
          </Text>
        )}
        <form onSubmit={onSubmit} style={{ marginTop: "30px" }}>
          <Flex flexDir={"column"} gap={"30px"}>
            {OPTIONS.map((option) => {
             
              return (
                <Input
                  title={option}
                  onChange={onChange}
                  key={option}
                  placeholder={option}
                  value={competitionData[option]}
                />
              )
            })}
          </Flex>
          <SubmitButton />
        </form>
      </Flex>
    </FormPageLayout>
  )
}

export default CreateCompetitionPage
