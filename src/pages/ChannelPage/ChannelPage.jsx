// import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Container } from "../../utils/Container/Container";
import { MessageList } from "../../components/MessageList/MessageList";
import { SendMessageForm } from "../../components/SendMessageForm/SendMessageForm";
import { data } from "../../messages";
import { useState } from "react";

const ChannelPage = () => {
//  const { channelId } = useParams();
    const [messages, setMessages] = useState(data.sort(compareDates));
  function compareDates(a, b) { return a.date - b.date }
  return (
    <Container>
      <Header goBack={true} imageUrl="https://klike.net/uploads/posts/2019-05/medium/1556708030_2.jpg" channelName="this is name" />
      <MessageList messages={messages} />
      <SendMessageForm setMessages={setMessages} />
    </Container>
  );
};

export default ChannelPage;
 