import { Container, LogoContent } from '@/utils';
import { Wrapper } from './Pages.styled';
import { HomeBtn } from '@/components/Buttons';

const HomePage = () => {
  const from = 'homepage';

  return (
    <Container>
      <Wrapper from={from}>
        <LogoContent
          widthLogo="160"
          heightLogo="160"
          title="Talk"
          slogan="Connect. Chat. Discover."
          from={from}
        />
        <HomeBtn />
      </Wrapper>
    </Container>
  );
};

export default HomePage;
