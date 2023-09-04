import { useCallback, useEffect, useState } from "react";
import { ChanelList } from "../../components/ChanelList/ChanelList"
import { Header } from "../../components/Header/Header"
import { getAllChannelsByUser } from "../../redux/channels/operations";
import { Container, Loader } from "../../utils"
import { useDispatch, useSelector } from "react-redux";
import { clearChannelsByUser } from "../../redux/channels/slice";

const MyChannelsPage = () => {
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [loadNextPage, setLoadNextPage] = useState(false);
  const { сhannellistByUser, count } = useSelector(state => state.channels);
  const dispatch = useDispatch();

  const getNextPage = useCallback(async () => {
    page === 1 ? setLoad(true) : setLoadNextPage(true);
    await dispatch(getAllChannelsByUser(page));
    setLoad(false); setLoadNextPage(false);
  }, [dispatch, page]);

  useEffect(() => { return () => dispatch(clearChannelsByUser()) }, [dispatch]);
  useEffect(() => { getNextPage() }, [getNextPage]);

  const ForwardPage = useCallback(() => { if (сhannellistByUser.length === count) { return } else { setPage(prev => prev + 1) } }, [сhannellistByUser.length, count]);
  
  return (
    <Container>
      <Header title="My Channels" goBack={true} profileLink={true} addChannelLink={true} />
     {load ? <Loader/> : <ChanelList channels={сhannellistByUser} isLoading={loadNextPage} ForwardPage={ForwardPage} />}
    </Container>
  )
}

export default MyChannelsPage