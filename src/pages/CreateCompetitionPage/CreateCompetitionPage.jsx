import React, { useState } from "react"
import FormPageLayout from "../../components/FormPageLayout/FormPageLayout"
import { Flex, Text } from "@chakra-ui/layout"
import Input from "../../components/Input/Input"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import competitionsService from "../../services/competitions.service"

const IMAGE =
  "https://farm66.staticflickr.com/65535/53515708112_387fef51e4_b.jpg"

const OPTIONS = ["name", "neighborhood", "address", "cuisine_type", "image"]

const DAYS = ["Monday", "Tuesday"]
function CreateCompetitionPage() {
  const [competitionData, setCompetitionData] = useState({
    name: "",
    cuisine_type: "",
    image: "",
    operating_hours: {},
  })

  const title = "Crear"
  const subtitle = "Crea tu propia competición"

  const onChange = (e) => {
    const { name, value } = e.target
    let update = { [name]: value }
    if (DAYS.includes(name)) {
      update = {
        operating_hours: {
          ...competitionData.operating_hours,
          [name]: value,
        },
      }
    }
    setCompetitionData({ ...competitionData, ...update })
  }

  const onSubmit = async (e) => {
    try {
      e.preventDefault()
      console.log("create", competitionData)
      await competitionsService.creatCompetition(competitionData)
      setCompetitionData({
        name: "",
        neighborhood: "",
        address: "",
        cuisine_type: "",
        image: "",
        operating_hours: {},
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
            {OPTIONS.concat(DAYS).map((option) => {
              if (DAYS.includes(option)) {
                console.log(competitionData.operating_hours[option])
              }
              return (
                <Input
                  name={option}
                  onChange={onChange}
                  key={option}
                  placeholder={option}
                  value={
                    DAYS.includes(option)
                      ? competitionData.operating_hours[option] || ""
                      : competitionData[option]
                  }
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
