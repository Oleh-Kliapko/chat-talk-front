import { Container, LogoContent } from '@/utils';
import { themes } from '@/styles';
import { BtnTemplate } from '../../components/Buttons/BtnTemplate';
import { MainContainer } from '../RecoverPasswordPage/RecoverPasswordPage.styled';
import { MainText, SecondaryText, FooterText, FooterContainer } from "./ResetPasswordPage.styled";

const ResetPasswordPage = () => {

    return (
        <Container>
            <MainContainer>
                <LogoContent widthLogo="80" heightLogo="80" title="Welcome to Talk!" />
                <MainText>Hi,<br />
                    Forgot password?<br />
                    We received a request to reset the password for your account.</MainText>
                <SecondaryText>To reset your password, click on the button below:</SecondaryText>
                <BtnTemplate text="Reset password"
                    textSize={themes.fontSizes.m}
                    color={themes.colors.white}
                    width="100%"
                    height={`${themes.spacing[12]}px`}
                    gradient={themes.colors.mainBtnBgr}
                    hoverGradient={themes.colors.accentBtnBgr}
                    border={themes.border.main}
                    borderRadius={themes.radii.main}
                    marginBottom={`${themes.spacing[6]}px`}
                    marginTop={`${themes.spacing[8]}px`}
                    type="button" />
                <FooterContainer>
                    <FooterText>Thanks,<br />The Talk Team</FooterText>
                </FooterContainer>
            </MainContainer>
        </Container>
    );
};

export default ResetPasswordPage
