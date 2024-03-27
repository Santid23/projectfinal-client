import FormPageLayout from "../../components/FormPageLayout/FormPageLayout"
import CustomForm from "../../components/CustomForm/CustomForm"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const LoginPage = () => {
  const { login } = useContext(AuthContext)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })
  const BACKGROUND_IMAGE =
    "https://farm66.staticflickr.com/65535/53516627781_e1e3851837_b.jpg"
  const onChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await login(userData)
  }

  return (
    <FormPageLayout backgroundImage={BACKGROUND_IMAGE}>
      <CustomForm
        marginBottom={"50px"}
        title={"Login"}
        subtitle={"Disfruta al máximo del Crossfit"}
        onChange={onChange}
        onSubmit={onSubmit}
        options={["username", "contraseña"]}
      />
    </FormPageLayout>
  )
}

export default LoginPage
