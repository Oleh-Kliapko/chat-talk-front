import { Header } from "../../components/Header/Header"
import { SecurityMenu } from "../../components/SecurityMenu/SecurityMenu"
import { Container } from "../../utils"

 export const SecurityPage = () => {
  return (
    <Container>
      <Header title="Security" goBack={true} />
      <SecurityMenu />
    </Container>
  )
}

