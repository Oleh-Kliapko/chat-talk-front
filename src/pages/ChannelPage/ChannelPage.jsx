import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Container } from "../../utils/Container/Container";
import { MessageList } from "../../components/MessageList/MessageList";
import { SendMessageForm } from "../../components/SendMessageForm/SendMessageForm";
// import { data } from "../../messages";
import { useEffect, useState } from "react";
import { getChannelById } from "../../redux/channels/operations";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../utils"
  import shortid from "shortid";


const socket = new WebSocket('wss://talk-chat6.onrender.com/ws/socket-server/');
const ChannelPage = () => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);
  const token = localStorage.getItem("accessToken")
  console.log(token);
  const { currentChannel: channel, isLoading } = useSelector(state => state.channels);
  const { channelId } = useParams();
  useEffect(() => { dispatch(getChannelById(channelId)) }, [channelId, dispatch]);
  useEffect(()=>{setWs(socket)}, [])
  useEffect(() => {
    if (ws) {
      ws.onopen = () => {
        ws.send(JSON.stringify({ token: token, room: channelId }));
    };
      socket.onmessage = function ({ data }) {
        console.log("data", data);
        const d = JSON.parse(data)
   setMessages((prevMessages) => [...prevMessages,{
      id: shortid.generate(),
      text: d.message,
      date: new Date(),
      owner: true,
      name: "John",
      image: "https://via.placeholder.com/150",
      isOnline: true
          }])}
    }
    return ()=>{ws.onclose = () => {
      // Обработка отключения от сервера WebSocket
      console.log('connection closed');
    };}
   
  }, [channelId, token, ws]);

  const handleSubmit = (message) => {
    console.log("message",message);
    ws.send(JSON.stringify({ 'message': message }));
 };



console.log(messages);
  
  // function compareDates(a, b) { return a.date - b.date }
  if (!channel) return null
  return (
    <Container>
      {isLoading ? <Loader /> :
        <>
          <Header goBack={true} imageUrl={channel.image} channelName={channel.title} id={channel.id} />
          <MessageList messages={messages} />
          <SendMessageForm setMessages={setMessages} handleSubmit={handleSubmit} />
        </>}
    </Container>
  );
};

export default ChannelPage;
 
