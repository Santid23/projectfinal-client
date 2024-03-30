import React, { useEffect, useState } from "react"
import FormPageLayout from "../../components/FormPageLayout/FormPageLayout"
import CustomForm from "../../components/CustomForm/CustomForm"
import authService from "../../services/auth.service"
import { useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const SignupPage = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  })

  /* useEffect(() => {
    console.log("El usuario data", userData)
  }, [userData]) */

  const toast = useToast()
  const navigate = useNavigate()

  const BACKGROUND_IMAGE =
    "https://farm66.staticflickr.com/65535/53516627866_1b4bcbc1f0_b.jpg"

  const onChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await authService.signup(userData)
      toast({
        title: "Cuenta creada!",
        description: "Hemos creado la cuenta perfectamente",
        status: "success",
        duration: 4000,
        isClosable: true,
      })
      navigate("/login")
    } catch (error) {
      console.log("Error ==>", error)
    }
  }

  return (
    <FormPageLayout backgroundImage={BACKGROUND_IMAGE}>
      <CustomForm
        marginBottom={"80px"}
        title={"Regístrate"}
        subtitle={"Apúntate o crea competiciones"}
        onChange={onChange}
        onSubmit={onSubmit}
        options={["username", "email", "password"]}
      />
    </FormPageLayout>
  )
}

export default SignupPage
