import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Container } from "../../utils/Container/Container";
import { MessageList } from "../../components/MessageList/MessageList";
import { SendMessageForm } from "../../components/SendMessageForm/SendMessageForm";
import { data } from "../../messages";
import { useEffect, useState } from "react";
import { getChannelById } from "../../redux/channels/operations";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../utils";

const ChannelPage = () => {
  const dispatch = useDispatch();
  const { currentChannel: channel, isLoading } = useSelector(state => state.channels);
  const { channelId } = useParams();
  useEffect(() => { dispatch(getChannelById(channelId)) }, [channelId, dispatch]);

  const [messages, setMessages] = useState(data.sort(compareDates));
  function compareDates(a, b) { return a.date - b.date }
  if (!channel) return null
  return (
    <Container>
      {isLoading ? <Loader /> :
        <>
          <Header goBack={true} imageUrl={channel.image} channelName={channel.title} id={channel.id} />
          <MessageList messages={messages} />
          <SendMessageForm setMessages={setMessages} />
        </>}
    </Container>
  );
};

export default ChannelPage;
 