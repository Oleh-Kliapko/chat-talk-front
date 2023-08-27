import { useDispatch, useSelector } from "react-redux";
import { ChanelList } from "../../components/ChanelList/ChanelList";
import { Header } from "../../components/Header/Header";
import { Search } from "../../components/Search/Search";
import { Container } from "../../utils";
import { getAllChannels } from "../../redux/channels/operations";
import { useEffect } from "react";

const MainPage = () => {
    const { channels, isLoading } = useSelector(state => state.channels);
    const dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect");
    dispatch(getAllChannels())
  }, [dispatch]);
  return (
    <Container>
      <Header title="Channels" goBack={false} profileLink={true} addChannelLink={true} />
      <Search />
      <ChanelList channels={channels} isLoading={isLoading} />
    </Container>
  );
};

export default MainPage;
