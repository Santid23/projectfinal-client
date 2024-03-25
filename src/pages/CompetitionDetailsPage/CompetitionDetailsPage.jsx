import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import competitionsService from "../../services/competitions.service"
import FormPageLayout from "../../components/FormPageLayout/FormPageLayout"
import CompetitionDetails from "../../components/CompetitionDetails/CompetitionDetails"
import { getCompetitionDetails } from "../../utils"
import Modal from "../../components/Modal/Modal"
import CustomForm from "../../components/CustomForm/CustomForm"
import {
  EDIT_COMPETITION_DATA,
  COMPETITION_MOCK,
  COMPETITION_OPTIONS,
} from "../../consts"

const CompetitionDetailsPage = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [showModal, setShowModal] = useState(false)
  const [competition, setCompetition] = useState(COMPETITION_MOCK)
  const [editCompetitionData, setEditCompetitionData] =
    useState(EDIT_COMPETITION_DATA)
  const { id } = useParams()
  const {
    title,
  days,
  province,
  city,
  address,
  description,
  image,
  dueDate
  } = competition
  const COMPETITION_DETAILS = getCompetitionDetails(
    title,
  days,
  province,
  city,
  address,
  description,
  image,
  dueDate
  )

  const getSingleCompetition = async () => {
    try {
      const singleCompetition = await competitionsService.getOneCompetition(id)
      setCompetition(singleCompetition)
    } catch (error) {
      console.log("Error ==>", error)
    }
  }

  useEffect(() => {
    getSingleCompetition()
  }, [])

  const handleChange = (e) => {
    const { title, value } = e.target
    console.log("EL TITULO Y EL VALUE ==>", title, value)
    setEditCompetitionData({ ...editCompetitionData, [title]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedCompetition = await competitionsService.editCompetition(
      id,
      editCompetitionData
    )
    setShowModal(false)
    setCompetition(updatedCompetition)
    try {
    } catch (error) {
      // MOSTRAR EL ERROR => MODAL!!! TE FALTA EL NOMBRE DE USUARIO: HACKER JIJIJI
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

export default CompetitionDetailsPage
