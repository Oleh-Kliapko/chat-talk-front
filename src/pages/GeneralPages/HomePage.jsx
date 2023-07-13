import { Container, LogoContent } from '@/utils';
import { Wrapper } from './Pages.styled';
import { HomeBtn } from '@/components/Buttons';

const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContent
          widthLogo="160"
          heightLogo="160"
          title="Talk"
          slogan="Connect. Chat. Discover."
          from="homepage"
        />
        <HomeBtn />
      </Wrapper>
    </Container>
  );
};

export default HomePage;
