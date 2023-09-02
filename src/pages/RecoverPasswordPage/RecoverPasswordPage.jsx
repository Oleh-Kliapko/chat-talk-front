import { useNavigate } from "react-router-dom";
import { ForgotPasswordLink } from "../../components/Auth/AuthForm/ForgotPassword/ForgotPasswordLink";
import { Container } from "../../utils";
import { MainContainer, Title, Text } from "./RecoverPasswordPage.styled"
import { useCallback, useState } from "react";
import { CreateModal } from "../../components/Modal";
import { SucsessPasswordModal } from "../../components/Modal/SucsessPasswordModal";

const RecoverPasswordPage = () => {
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    const onCloseRecieved = useCallback(() => {
        setOpenModal(false);
        navigate("/login")
    }, [navigate]);
  const onOpenRecieved = useCallback(() => setOpenModal(true), []);
    return (
        <Container>
            <MainContainer>
                <Title>Recover Password</Title>
                <Text>Create a new strong password that you don’t
                    use for other websites</Text>
                < ForgotPasswordLink onOpenRecieved={onOpenRecieved} />
                {openModal && <CreateModal >
        <SucsessPasswordModal onClose={onCloseRecieved} title="Success!" subtitle="Your password has been updated successfully" />
      </CreateModal > }
            </MainContainer>
        </Container>
    );
};

export default RecoverPasswordPage;
