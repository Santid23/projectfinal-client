import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import competitionsService from "../../services/competitions.service"
import FormPageLayout from "../../components/FormPageLayout/FormPageLayout"
import CompetitionDetails from "../../components/CompetitionDetails/CompetitionDetails"
import { getCompetitionDet } from "../../utils" 
import Modal from "../../components/Modal/Modal"
import CustomForm from "../../components/CustomForm/CustomForm"
import {
  EDIT_COMPETITION_DATA,
  COMPETITION_MOCK,
  COMPETITION_OPTIONS,
} from "../../consts"


const CompetitionDetPage = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [showModal, setShowModal] = useState(false)
  const [competition, setCompetition] = useState(COMPETITION_MOCK)
  const [editCompetitionData, setEditCompetitionData] =
    useState(EDIT_COMPETITION_DATA)
  const { id } = useParams()
  const {
    title,
    description,
    status,
    province,
    city,
    image,
    days,
    dueDate
  } = competition
  
  const COMPETITION_DETAILS = getCompetitionDet(
    title,
    description,
    status,
    province,
    city,
    days,
    dueDate
  )

  const getSingleCompetition = async () => {
    try {
      let singleCompetition = await competitionsService.getOneCompetition(id)
      setCompetition(singleCompetition)
    } catch (error) {
      console.log("Error ==>", error)
    }
  }

  useEffect(() => {
    getSingleCompetition()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log("EL TITULO Y EL VALUE ==>", name, value)
    setEditCompetitionData({ ...editCompetitionData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedCompetition = await competitionsService.editCompetition(
      id,
      editCompetitionData
    )
    console.log("EL RESTAURANTE ACTUALIZADO ==>", updatedCompetition )
    setShowModal(false)
    setCompetition(updatedCompetition)
    try {
    } catch (error) {
      console.log("ERROR ==>", error)
    }
  }

 return (
    <FormPageLayout backgroundImage={image}>
      <CompetitionDetails
        onOpen={() => setShowModal(true)}
        competitionDetails={COMPETITION_DETAILS}
      />
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <CustomForm
            options={COMPETITION_OPTIONS}
            onChange={handleChange}
            onSubmit={handleSubmit}
            title={"Editar competición!"}
          />
        </Modal>
      )}
      
    </FormPageLayout>
  ) 
}

export default CompetitionDetPage