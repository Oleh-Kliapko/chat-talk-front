import { toast } from "react-toastify";
import { MdAlternateEmail, VscSend } from "../../images/reactIcons/index";
import { MainContainer, Input, ButtonsContainer, Button } from "./SendMessageForm.styled";
import { useCallback, useState } from "react";

export const SendMessageForm = () => {
  const [message, setMessage] = useState("");
  const sendMessage = useCallback(() => {
    if (message.trim() === "") return toast.warning("enter message");
    toast.success(`message => ${message}`);
  }, [message]);

  return (
    <MainContainer>
      <Input type="text" placeholder="Start typing..." value={message} onChange={(e) => setMessage(e.target.value)} />
      <ButtonsContainer ButtonsContainer>
        <Button type="button" onClick={() => console.log("click")}><MdAlternateEmail size={16} color={"#8E8E93"} /></Button>
        <Button type="button" onClick={sendMessage}><VscSend size={16} color={"#3D3D3D"} /></Button>
      </ButtonsContainer>
    </MainContainer>
  );
};

