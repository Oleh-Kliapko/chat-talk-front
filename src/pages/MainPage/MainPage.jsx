import { useDispatch } from "react-redux";
import { ChanelList } from "../../components/ChanelList/ChanelList";
import { Header } from "../../components/Header/Header";
import { Search } from "../../components/Search/Search";
import { Container } from "../../utils";
import { logOut } from "../../redux/auth/operations";
import { useCallback } from "react";

const MainPage = () => {
  const dispatch = useDispatch();
  const signOut = useCallback(async () => { dispatch(logOut()) }, [dispatch]);
  return (
    <Container>
      <button onClick={signOut} type="button">logout</button>
      <Header title="Channels" />
      <Search />
      <ChanelList />
    </Container>
  );
};

export default MainPage;
