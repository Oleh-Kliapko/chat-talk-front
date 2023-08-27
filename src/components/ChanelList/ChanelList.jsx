import { useEffect } from "react";
import { EmptyChannelList } from "../EmptyChannelList/EmptyChannelList";
import {MainContainer,List} from "./ChanelList.styled"
import { ChannelItem } from "./ChannelItem";
import { getAllChannels } from "../../redux/channels/operations";
import { Loader } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
export const ChanelList = ({channels,isLoading}) => {


  if (channels.length === 0) return <EmptyChannelList />;
  return (
    <MainContainer>
      {isLoading ? <Loader /> :
        <List>
          {channels.map(channel => <ChannelItem key={channel.id} channel={channel} />)}
        </List>}
    </MainContainer>
  );
};
ChannelItem.propTypes = { from: PropTypes.string };
