import { Header } from "../../components/Header/Header"
import { SecurityMenu } from "../../components/SecurityMenu/SecurityMenu"
import { Container } from "../../utils"

const SecurityPage = () => {
  return (
    <Container>
      <Header title="Security" goBack={true} />
      <SecurityMenu />
    </Container>
  )
}

export default SecurityPage