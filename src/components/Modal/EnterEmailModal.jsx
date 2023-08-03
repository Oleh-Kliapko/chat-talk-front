import { BtnTemplate } from "../Buttons/BtnTemplate";
import { Input, InputWrapper, MainContainer, MainText, SecondaryText, LabelWrapper } from "./EnterEmailModal.styled";
import { Email } from '@/images/svg';
import { themes } from "../../styles/themes";
export const EnterEmailModal = ({ onClose,onOpenRecieved }) => {
    

    return (
        <MainContainer>
            <MainText>Forgot password</MainText>
            <SecondaryText>Enter your email address, and we'll send you a link to reset your password</SecondaryText>
            <LabelWrapper><label htmlFor="email">Email</label></LabelWrapper>
            <InputWrapper>
                <Input type="email" id="email" placeholder="Email address" />
                <Email />
            </InputWrapper>
            <BtnTemplate onClick={() => { onClose(); onOpenRecieved()}}
                text="Continue"
                textSize={themes.fontSizes.m}
                color={themes.colors.white}
                width="100%"
                height={`${themes.spacing[12]}px`}
                gradient={themes.colors.mainBtnBgr}
                hoverGradient={themes.colors.accentBtnBgr}
                border={themes.border.main}
                borderRadius={themes.radii.main}
                marginTop={`84px`}
                type="button"
            />
        </MainContainer>
    );
}

