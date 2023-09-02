import { useCallback, useEffect, useState } from "react";
import { ChanelList } from "../../components/ChanelList/ChanelList"
import { Header } from "../../components/Header/Header"
import { getAllChannelsByUser } from "../../redux/channels/operations";
import { Container } from "../../utils"
import { useDispatch, useSelector } from "react-redux";
import { clearChannels, clearChannelsByUser } from "../../redux/channels/slice";

const MyChannelsPage = () => {
  const [page, setPage] = useState(1);
  const { сhannellistByUser, isLoading, count } = useSelector(state => state.channels);
  const dispatch = useDispatch();

  const search = useCallback(async () => {
    await dispatch(clearChannels());
    dispatch(getAllChannelsByUser(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(clearChannelsByUser())
    return ()=>{ dispatch(clearChannelsByUser())}
  }, [dispatch]);

  useEffect(() => {
    search();
    return () => { if (page !== 1) dispatch(clearChannels()) };
  }, [dispatch, page, search]);
  const ForwardPage = useCallback(() => { if (сhannellistByUser.length === count) { return } else { setPage(prev => prev + 1) } }, [сhannellistByUser.length, count]);
  return (
    <Container>
      <Header title="My Channels" goBack={true} profileLink={true} addChannelLink={true} />
      <ChanelList channels={сhannellistByUser} isLoading={isLoading} ForwardPage={ForwardPage} />
    </Container>
  )
}

export default MyChannelsPage