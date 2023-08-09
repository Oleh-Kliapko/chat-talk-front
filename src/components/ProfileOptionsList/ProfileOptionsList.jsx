import { useNavigate } from "react-router-dom";
import { IoIosArrowForward, IoLogOutOutline } from "../../images/reactIcons"
import { List } from "../../images/svg"
import { themes } from "../../styles/themes";
import { MainContainer } from "./ProfileOptionsList.styled"
import { ListItem, IconContainer, Text, Box,Lis} from "./ProfileOptionsList.styled";
import PropTypes from 'prop-types';
export const ProfileOptionsList = ({showModal}) => {
const navigate = useNavigate()
    return (
        <MainContainer>
            <Lis>
                <ListItem onClick={() => navigate("/my-channels")}>
                    <Box><IconContainer><List /></IconContainer><Text>My channels</Text></Box>
                    <IoIosArrowForward size={24} color={themes.colors.grey} />
                </ListItem>
                <ListItem onClick={showModal}>
                    <Box><IconContainer><IoLogOutOutline size={20} /> </IconContainer><Text>Log Out</Text></Box>
                    <IoIosArrowForward size={24} color={themes.colors.grey} /></ListItem>
            </Lis>
        </MainContainer>
    );
}

ProfileOptionsList.propTypes = {
  showModal: PropTypes.func,
};
