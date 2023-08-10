
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon, AvatarIcon } from "../../images/reactIcons";
import Plus from "../../images/svg/Plus"
import { MainContainer, HeadContainer, LinkContainer, MainText, StyledLink, Button,ChannelImageBox,Image,ChannelName } from "./Header.styled";
import PropTypes from 'prop-types';

export const Header = ({ title, goBack, profileLink, addChannelLink, imageUrl,channelName }) => {
    const navigate = useNavigate();
    console.log("channelName",channelName);
    return (
        <MainContainer>
            <HeadContainer>
                {goBack && <Button onClick={() => navigate(-1)}><ArrowBackIcon size={24} /></Button>}
                {title && <MainText>{title}</MainText>}
            </HeadContainer>
            {channelName && <ChannelName>{channelName}</ChannelName>}
            <LinkContainer>
                {imageUrl ? <ChannelImageBox><Image src={imageUrl} width={40} height={40} /></ChannelImageBox>
                    :
                    <>{addChannelLink && <StyledLink to='/create-channel'><Plus size={20} /></StyledLink>}
                        {profileLink && <StyledLink to='/my-profile'><AvatarIcon size={40} /></StyledLink>}</>}
            </LinkContainer>
        </MainContainer>
    );
}
Header.propTypes = {
    title: PropTypes.string,
    profileLink: PropTypes.bool,
    addChannelLink: PropTypes.bool,
    goBack: PropTypes.bool,
    channelName: PropTypes.string,
     imageUrl:PropTypes.string,
};


// import { useNavigate } from "react-router-dom";
// import { ArrowBackIcon, AvatarIcon } from "../../images/reactIcons";
// import Plus from "../../images/svg/Plus"
// import { MainContainer, HeadContainer, LinkContainer, MainText, StyledLink, Button } from "./Header.styled";
// import PropTypes from 'prop-types';

// export const Header = ({ title, goBack, profileLink, addChannelLink }) => {
//     const navigate = useNavigate();
//     return (
//         <MainContainer>
//             <HeadContainer>
//                 {goBack && <Button onClick={() => navigate(-1)}><ArrowBackIcon size={24} /></Button>}
//                 <MainText>{title}</MainText>
//             </HeadContainer>
//      <LinkContainer>
//             { addChannelLink &&   <StyledLink to='/create-channel'><Plus size={20} /></StyledLink>}
//             { profileLink &&   <StyledLink to='/my-profile'><AvatarIcon size={40} /></StyledLink>}
//             </LinkContainer>
//         </MainContainer>
//     );
// }
// Header.propTypes = {
//     title: PropTypes.string,
//     profileLink: PropTypes.bool,
//     addChannelLink: PropTypes.bool,
//     goBack: PropTypes.bool,
     
// };