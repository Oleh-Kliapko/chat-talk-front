import { useEffect } from "react";
import { EmptyChannelList } from "../EmptyChannelList/EmptyChannelList";
import {MainContainer,List} from "./ChanelList.styled"
import { ChannelItem } from "./ChannelItem";
import { getAllChannels } from "../../redux/channels/operations";
import { Loader } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
export const ChanelList = (
  // { channels, isLoading }
) => {
      const { channels, isLoading, nextPage } = useSelector(state => state.channels);
  const dispatch = useDispatch();
  console.log('channels', channels);
  useEffect(() => { dispatch(getAllChannels()) }, [dispatch]);
  if (isLoading) return <Loader />;
  if (channels.length === 0) return <EmptyChannelList />;
  return (
    <MainContainer>
      <List>
        {channels.map(channel => <ChannelItem key={channel.id} channel={channel} />)}
      </List>
      {/* <button type="button" onClick={}>load more</button> */}
    </MainContainer>
  );
};
ChanelList.propTypes = {
  channels: PropTypes.array,
  isLoading: PropTypes.bool,
};
