import { ChanelList } from "../../components/ChanelList/ChanelList";
import { Header } from "../../components/Header/Header";
import { Search } from "../../components/Search/Search";
import { Container } from "../../utils";

const MainPage = () => {


  return (
    <Container>
      <Header title="Channels" />
      <Search />
      <ChanelList />
    </Container>
  );
};

export default MainPage;
