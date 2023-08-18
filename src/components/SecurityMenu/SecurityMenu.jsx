import { Lis, MainContainer, ListItem, Box,Text,SecondaryText } from "./SecurityMenu.styled"
import { IoIosArrowForward } from "../../images/reactIcons";
import { useNavigate } from "react-router-dom";
import { themes } from "../../styles/themes";

export const SecurityMenu = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Lis>
        <ListItem onClick={() => navigate("/change-password")}>
          <Box>
            <Text>Password</Text>
            <SecondaryText>***********</SecondaryText>
          </Box>
          <IoIosArrowForward size={24} color={themes.colors.grey} />
        </ListItem>
      </Lis>
    </MainContainer>
  );
};