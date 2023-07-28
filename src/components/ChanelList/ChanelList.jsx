import { useEffect, useState } from "react";
import { EmptyChannelList } from "../EmptyChannelList/EmptyChannelList";
import list from "../../list";
import {MainContainer,List} from "./ChanelList.styled"
import { ChannelItem } from "./ChannelItem";

export const ChanelList = () => {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    const ChannelsList = list;
    setChannels(ChannelsList)
  }, []);
  console.log(channels);
  if (!channels) return <EmptyChannelList />;
  return (
    <MainContainer>
      <List>
        {channels.map(channel => <ChannelItem key={channel.id} channel={channel} />)}
      </List>
    </MainContainer>
  );
};

