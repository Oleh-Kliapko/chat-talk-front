import { useCallback, useState } from "react";
import { ChanelList } from "../../components/ChanelList/ChanelList";
import { Header } from "../../components/Header/Header";
import { Search } from "../../components/Search/Search";
import { Container } from "../../utils";
import { getAllChannels } from "../../redux/channels/operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearChannels } from "../../redux/channels/slice";

const MainPage = () => {
  const [page, setPage] = useState(1);
  const { channels, isLoading, count } = useSelector(state => state.channels);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getAllChannels(page)); return () => { if (page !== 1) dispatch(clearChannels()) }; }, [dispatch, page]);
  const ForwardPage = useCallback(() => { if (channels.length === count) { return } else { setPage(prev => prev + 1) } }, [channels.length, count]);
  return (
    <Container>
      <Header title="Channels" goBack={false} profileLink={true} addChannelLink={true} />
      <Search page={page} />
      <ChanelList
        channels={channels} isLoading={isLoading} ForwardPage={ForwardPage}
      />
    </Container>
  );
};

export default MainPage;
