import { EmptyChannelList } from "../EmptyChannelList/EmptyChannelList";
import {MainContainer,List} from "./ChanelList.styled"
import { ChannelItem } from "./ChannelItem";
import { Loader } from "../../utils";
import PropTypes from 'prop-types';
import { useLazyLoading } from "../../hooks/useLazyLoading";

export const ChanelList = ({ channels, isLoading, ForwardPage }) => {
  const [onScroll, containerRef] = useLazyLoading({ onIntersection: ForwardPage, delay: 800 });
 
  if (!channels) return <EmptyChannelList />;
  return (
    <MainContainer ref={containerRef} onScroll={onScroll}>
      <List>
        {channels.map(channel => <ChannelItem key={channel.id} channel={channel} />)}
        {isLoading && <Loader />}
      </List>
    </MainContainer>
  );
};
ChanelList.propTypes = {
  channels: PropTypes.array,
  isLoading: PropTypes.bool,
  ForwardPage: PropTypes.func,
};
