import { Container, LogoContent } from '@/utils';
import { themes } from '@/styles';
import { BtnTemplate } from '../../components/Buttons/BtnTemplate';
import { MainContainer } from '../RecoverPasswordPage/RecoverPasswordPage.styled';
import { MainText, MainTextBox, FooterText, FooterContainer } from "./VeriFyEmailPage.styled";

const VeriFyEmailPage = () => {
    return (
        <Container>
            <MainContainer>
                <LogoContent widthLogo="80" heightLogo="80" title="Welcome to Talk!" />
                <MainTextBox>
                    <MainText>Hi,<br /> You&apos;re almost ready to get started. Please click on the button below to verify your email address!</MainText>
                </MainTextBox>
                <BtnTemplate text="Verify email"
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

export default VeriFyEmailPage
