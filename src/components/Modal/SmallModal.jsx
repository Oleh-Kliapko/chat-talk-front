import { themes } from "../../styles/themes";
import { BtnTemplate } from "../Buttons/BtnTemplate";
import { MainContainer,MainText,Text,ButtonsContainer } from "./SmallModal.styled";
import PropTypes from 'prop-types';

export const SmallModal = ({ yes, no, title, subtitle }) => {
    return (
        <MainContainer>
            <MainText>{title }</MainText>
            <Text>{subtitle }</Text>
            <ButtonsContainer>
                <BtnTemplate
                    onClick={no}
                    text="No"
                    textSize={themes.fontSizes.m}
                    color={themes.colors.main}
                    width="90px"
                    height={`40px`}
                    hoverGradient={themes.colors.accentBtnBgr}
                    border={themes.border.accent}
                    borderRadius={themes.radii.main}
                    type="button"
                />
                <BtnTemplate
                    onClick={yes}
                    text="Yes"
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
            </ButtonsContainer>
        </MainContainer>
    );
};

SmallModal.propTypes = {
    yes: PropTypes.func,
    no: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
};
