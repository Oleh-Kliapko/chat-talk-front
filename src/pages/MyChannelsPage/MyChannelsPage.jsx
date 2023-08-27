import { useEffect } from "react";
import { ChanelList } from "../../components/ChanelList/ChanelList"
import { Header } from "../../components/Header/Header"
import { getAllChannels } from "../../redux/channels/operations";
import { Container } from "../../utils"
import { useDispatch, useSelector } from "react-redux";

export const MyChannelsPage = () => {
    const { channels, isLoading } = useSelector(state => state.channels);
    const dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect");
    dispatch(getAllChannels())
  }, [dispatch]);
  return (
    <Container>
      <Header title="My Channels" goBack={true} profileLink={true} addChannelLink={true} />
      <ChanelList channels={channels} isLoading={isLoading} />
    </Container>
  )
}

