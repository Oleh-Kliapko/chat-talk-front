import emptyList from "../../images/others/emptyChannels.png";
import { MainContainer,Text,StyledLink } from "./EmptyChannelList.styled";

export const EmptyChannelList = () => {
  return (
      <MainContainer>
          <img src={emptyList} width={280} height={280} />
          <Text>No channels yet</Text>
          <StyledLink to='/create-channel'>Create</StyledLink>
      
    </MainContainer>
  )
}


