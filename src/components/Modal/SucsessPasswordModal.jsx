import { MdOutlineDone } from "../../images/reactIcons/index"
import { themes } from "../../styles/themes"
import { BtnTemplate } from "../Buttons/BtnTemplate"
import { MainContainer, MainText, SuccessContainer, Text } from "./SucsessPasswordModal.styled"
import PropTypes from 'prop-types';
export const SucsessPasswordModal = ({ title, subtitle, onClose }) => {
    return (
        <MainContainer>
            <SuccessContainer>
                <MdOutlineDone size={74} fill={"#fff"} />
            </SuccessContainer>
            <MainText>{title}</MainText>
            <Text>{subtitle}</Text>
            <BtnTemplate
                onClick={onClose}
                text="OK"
                textSize={themes.fontSizes.m}
                color={themes.colors.white}
                width="90px"
                height={`40px`}
                gradient={themes.colors.mainBtnBgr}
                hoverGradient={themes.colors.accentBtnBgr}
                border={themes.border.main}
                borderRadius={themes.radii.main}
                type="button"
            />
        </MainContainer>
    );
};

SucsessPasswordModal.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onClose: PropTypes.func,
};
