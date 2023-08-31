import { useCallback, useEffect, useState } from "react";
import { ChanelList } from "../../components/ChanelList/ChanelList"
import { Header } from "../../components/Header/Header"
import { getAllChannelsByUser } from "../../redux/channels/operations";
import { Container } from "../../utils"
import { useDispatch, useSelector } from "react-redux";
import { clearChannels } from "../../redux/channels/slice";

export const MyChannelsPage = () => {
  const [page, setPage] = useState(1);
  const { channels, isLoading, count } = useSelector(state => state.channels);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getAllChannelsByUser(page)); return () => { if (page !== 1) dispatch(clearChannels()) }; }, [dispatch, page]);
  const ForwardPage = useCallback(() => { if (channels.length === count) { return } else { setPage(prev => prev + 1) } }, [channels.length, count]);
  return (
    <Container>
      <Header title="My Channels" goBack={true} profileLink={true} addChannelLink={true} />
      <ChanelList channels={channels} isLoading={isLoading} ForwardPage={ForwardPage} />
    </Container>
  )
}

