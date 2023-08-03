import { TfiEmail } from "react-icons/tfi"
import {EmailBox,MainContainer,MainText,SecondaryText,Text,Button} from "./SingingUpModal.styled"

export const SingingUpModal = ({onClose}) => {
    return (
        <>
            <EmailBox> <TfiEmail color="white" size={54} /> </EmailBox>
            <MainContainer>
                <MainText>Thank you for signing up!</MainText>
                <SecondaryText>To complete your registration,<br /> please check your inbox</SecondaryText>
                <Text>Didn’t received the email yet?</Text>
                <Button onClick={onClose}>Click here to try again</Button>
            </MainContainer>
        </>
    );
}

