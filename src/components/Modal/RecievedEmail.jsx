import { TfiEmail } from "react-icons/tfi"
import {EmailBox,MainContainer,MainText,SecondaryText,Text,Button} from "./SingingUpModal.styled"
import PropTypes from 'prop-types';
export const RecievedEmail = ({ onClose }) => {
    return (
        <>
            <EmailBox> <TfiEmail color="white" size={54} /> </EmailBox>
            <MainContainer>
                <MainText>Email received!</MainText>
                <SecondaryText>Check your inbox for the password <br />reset instructions</SecondaryText>
                <Text>Didn’t received the email yet?</Text>
                <Button onClick={onClose}>Click here to try again</Button>
            </MainContainer>
        </>
    );
}

RecievedEmail.propTypes = {
    onClose: PropTypes.func,
};
