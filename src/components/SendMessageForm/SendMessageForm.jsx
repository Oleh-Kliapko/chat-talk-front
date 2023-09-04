import { toast } from "react-toastify";
import { MdAlternateEmail, VscSend } from "../../images/reactIcons/index";
import { MainContainer, Input, ButtonsContainer, Button } from "./SendMessageForm.styled";
import { useCallback, useState } from "react";
import shortid from "shortid";
import PropTypes from 'prop-types';
export const SendMessageForm = ({setMessages}) => {
  const [message, setMessage] = useState("");
  const sendMessage = useCallback(() => {
    if (message.trim() === "") return toast.warning("enter message");
    setMessages(prev => [...prev, {
      id: shortid.generate(),
      text: message,
      date: new Date(),
      owner: true,
      name: "John",
      image: "https://via.placeholder.com/150",
      isOnline: true
    }]);
    setMessage("")
    toast.success(`message => ${message}`);
  }, [message, setMessages]);

  return (
    <MainContainer>
      <Input type="text" placeholder="Start typing..." maxLength={200} value={message} onChange={(e) => setMessage(e.target.value)} />
      <ButtonsContainer ButtonsContainer>
        <Button type="button" onClick={() => console.log("click")}><MdAlternateEmail size={16} color={"#8E8E93"} /></Button>
        <Button type="button" onClick={sendMessage}><VscSend size={16} color={"#3D3D3D"} /></Button>
      </ButtonsContainer>
    </MainContainer>
  );
};

SendMessageForm.propTypes = {
  setMessages: PropTypes.func,
};