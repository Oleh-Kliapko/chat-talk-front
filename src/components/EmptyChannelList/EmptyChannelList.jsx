import emptyList from "../../images/others/emptyChannels.png";
import noFound from "../../images/others/notFound.png";
import { MainContainer,Text,StyledLink } from "./EmptyChannelList.styled";
import PropTypes from 'prop-types';
export const EmptyChannelList = ({notFound}) => {
  
  return (
    <MainContainer>
      <img src={notFound ? noFound  : emptyList} width={280} height={280} />
      <Text>{notFound? "Not found request" :"No channels yet"}</Text>
     {!notFound && <StyledLink to='/create-channel'>Create</StyledLink>}
    </MainContainer>
  );
};

EmptyChannelList.propTypes = { notFound: PropTypes.bool };

