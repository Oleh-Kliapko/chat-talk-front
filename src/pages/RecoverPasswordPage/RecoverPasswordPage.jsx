import { ForgotPasswordLink } from "../../components/Auth/AuthForm/ForgotPassword/ForgotPasswordLink";
import { Container } from "../../utils";
import {MainContainer,Title,Text} from "./RecoverPasswordPage.styled"
const RecoverPasswordPage = () => {
    return (
        <Container>
            <MainContainer>
                <Title>Recover Password</Title>
                <Text>Create a new strong password that you don’t
                    use for other websites</Text>
                < ForgotPasswordLink />
            </MainContainer>
        </Container>
    );
};

export default RecoverPasswordPage;
