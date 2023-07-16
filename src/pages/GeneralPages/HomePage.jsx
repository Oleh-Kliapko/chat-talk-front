import { Container, LogoContent } from '@/utils';
import { HomeBtn } from '@/components/Buttons';

const HomePage = () => {
  const from = 'homepage';

  return (
    <Container from={from}>
      <LogoContent
        widthLogo="160"
        heightLogo="160"
        title="Talk"
        slogan="Connect. Chat. Discover."
        from={from}
      />
      <HomeBtn />
    </Container>
  );
};

export default HomePage;
