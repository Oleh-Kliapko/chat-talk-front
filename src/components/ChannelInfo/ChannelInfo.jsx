import { useNavigate } from "react-router-dom";
import { themes } from "../../styles/themes"
import { BtnTemplate } from "../Buttons/BtnTemplate"
import { MainContainer, ImgContainer,Image,Button,MainText,Text,Description } from "./ChannelInfo.styled";
import { ArrowBackIcon } from "../../images/reactIcons";
import PropTypes from 'prop-types';

export const ChannelInfo = ({onOpen,channelId}) => {
  const navigate = useNavigate();
  return (
      <MainContainer>
          <ImgContainer>
              <Image src={"https://klike.net/uploads/posts/2019-05/medium/1556708030_2.jpg"} alt="channel-image" />
              <Button onClick={() => navigate(-1)}><ArrowBackIcon size={24} fill="#fff" /></Button>
          </ImgContainer>
          <MainText>Task Force Leader</MainText>
          <Text>by Benjamine@.com</Text>
          <MainText>Description</MainText>
      <Description>Experienced and dynamic leader spearheading collaborative initiatives, driving effective decision-making.</Description>
           <BtnTemplate
                onClick={()=>navigate(`/edit-channel/${channelId}`)}
                text="Edit channel"
                textSize={themes.fontSizes.m}
                color={themes.colors.white}
                width="100%"
                height={`${themes.spacing[12]}px`}
                gradient={themes.colors.mainBtnBgr}
                hoverGradient={themes.colors.accentBtnBgr}
                border={themes.border.main}
                borderRadius={themes.radii.main}
                marginTop={`245px`}
                // marginBottom={`auto`}
                type="button"
            />
              <BtnTemplate
                onClick={onOpen}
                text="Delete channel"
                textSize={themes.fontSizes.m}
                color={themes.colors.main}
                width="100%"
                height={`${themes.spacing[12]}px`}
                // hoverGradient={themes.colors.accentBtnBgr}
                border={themes.border.main}
                borderRadius={themes.radii.main}
                marginTop={`8px`}
                marginBottom={`auto`}
                type="button"
            />
    </MainContainer>
  )
}

ChannelInfo.propTypes = {
  onOpen: PropTypes.func,
  channelId: PropTypes.string
};