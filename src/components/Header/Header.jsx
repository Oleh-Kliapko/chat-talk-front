
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon, AvatarIcon, IoClose } from "../../images/reactIcons";
import Plus from "../../images/svg/Plus"
import { MainContainer, HeadContainer, LinkContainer, MainText, StyledLink, Button,ChannelImageBox,Image,ChannelName,Text } from "./Header.styled";
import PropTypes from 'prop-types';

export const Header = ({ title, goBack,close, profileLink, addChannelLink, imageUrl, channelName, id="123",done,subTitle }) => {
    const navigate = useNavigate();
    return (
        <MainContainer>
            <HeadContainer>
                {goBack && <Button onClick={() => navigate(-1)}><ArrowBackIcon size={24} /></Button>}
                {close && <Button onClick={() => navigate("/")}><IoClose size={24} /></Button>}
                {title && <MainText>{title}</MainText>}
            </HeadContainer>
            { subTitle && <MainText>{subTitle}</MainText>}
            {channelName && <ChannelName>{channelName}</ChannelName>}
            <LinkContainer>
                {done && <Text type="submit" onClick={done}>Done</Text>}
                {imageUrl ? <ChannelImageBox onClick={()=>navigate(`/about-channel/${id}`)} ><Image src={imageUrl} width={40} height={40} /></ChannelImageBox>
                    :
                    <>{addChannelLink && <StyledLink to='/create-channel'><Plus size={20} /></StyledLink>}
                        {profileLink && <StyledLink to='/my-profile'><AvatarIcon size={40} /></StyledLink>}</>}
            </LinkContainer>
        </MainContainer>
    );
};
Header.propTypes = {
    title: PropTypes.string,
    profileLink: PropTypes.bool,
    addChannelLink: PropTypes.bool,
    goBack: PropTypes.bool,
    close: PropTypes.bool,
    channelName: PropTypes.string,
    imageUrl: PropTypes.string,
    id: PropTypes.string,
    done: PropTypes.func,
    subTitle: PropTypes.string,
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