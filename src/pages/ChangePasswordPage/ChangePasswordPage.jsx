import { ChangePasswordForm } from "../../components/ChangePasswordForm/ChangePasswordForm";
import { Header } from "../../components/Header/Header"
import { Container } from "../../utils"

export const ChangePasswordPage = () => {

  return (
    <Container>
      <Header close={true} subTitle="Password"  />
      <ChangePasswordForm  />
    </Container>
  );
};