import { MdAlternateEmail, VscSend } from "../../images/reactIcons/index";
import { MainContainer, Input, ButtonsContainer, Button } from "./SendMessageForm.styled";

export const SendMessageForm = () => {
  
  return (
    <MainContainer>
      <Input type="text" placeholder="Start typing..." />
      <ButtonsContainer ButtonsContainer>
        <Button type="button" onClick={() => console.log("click")}><MdAlternateEmail size={16} color={"#8E8E93"} /></Button>
        <Button type="button" onClick={() => console.log("click")}><VscSend size={16} color={"#3D3D3D"} /></Button>
      </ButtonsContainer>
    </MainContainer>
  );
}

