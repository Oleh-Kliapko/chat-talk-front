import { useEffect, useState } from "react";
import { EmptyChannelList } from "../EmptyChannelList/EmptyChannelList";
import list from "../../list";
import {MainContainer,List} from "./ChanelList.styled"
import { ChannelItem } from "./ChannelItem";
import PropTypes from 'prop-types';

export const ChanelList = ({from}) => {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    const ChannelsList = list;
    setChannels(ChannelsList)
  }, []);

  if (!channels) return <EmptyChannelList />;
  return (
    <MainContainer>
      <List>
        {channels.map(channel => <ChannelItem key={channel.id} channel={channel} />)}
      </List>
    </MainContainer>
  );
};

ChanelList.propTypes = {
  from: PropTypes.string,
};