import { useEffect, useRef } from "react";
import {
  MainContainer,
  Item,
  ImgContainer,
  Image,
  MessageContainer,
  NameText,
  MessageText,
  DateText,
  ProfileContainer,
  OnlineBox,
  List,
  DateContainer,
  DateTexts
} from "./MessageList.styled";

export const MessageList = ({ messages }) => {
  const listRef = useRef();
console.log("MessageList");
  const scrollToBottom = () => {
    listRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => { scrollToBottom() }, [messages]);

  function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const todayDate = new Date();
  const yesterdayDate = new Date(todayDate);
  yesterdayDate.setDate(todayDate.getDate() - 1);
  const today = formatDate(todayDate);
  const yesterday = formatDate(yesterdayDate);

  const showDate = (date) => {
    if (date === today) return "today";
    if (date === yesterday) return "yesterday";
    return date;
  };

  const groupedByDay = messages.reduce((acc, obj) => {
  const date = formatDate(obj.date)
    if (!acc[date]) { acc[date] = [] }
  acc[date].push(obj);
  return acc;
  }, {});
  
  console.log("data",groupedByDay);
  return (
    <MainContainer >
      <List ref={listRef}>
        {Object.keys(groupedByDay).map(date => (
          <div key={date}>
            <DateContainer><DateTexts>{showDate(date)}</DateTexts><hr /></DateContainer>
            <ul>
              {groupedByDay[date].map((el,idx,arr) => { if (idx > 0 && el.name === arr[idx-1].name){return <Message repeatMsg={false} key={el.id} el={el} />}else {return <Message repeatMsg={true}   key={el.id} el={el} />}})}
            </ul>
          </div>))}
      </List>
    </MainContainer >
  );
};

const Message = ({ el, repeatMsg }) => {
  function format12HourTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    return formattedTime;
  }
  return (
    <Item owner={el.owner}>
      <ProfileContainer owner={el.owner}>
        <ImgContainer repeatMsg={repeatMsg}>
          <Image src={el.image} alt={el.name} />
        </ImgContainer >
        {el.isOnline && repeatMsg && <OnlineBox></OnlineBox>}
      </ProfileContainer>
      <MessageContainer repeatMsg={repeatMsg}   owner={el.owner}>
        {!el.owner && <NameText>{el.name}</NameText>}
        <MessageText owner={el.owner}>{el.text}</MessageText>
        <DateText owner={el.owner}>{format12HourTime(el.date)}</DateText>
      </MessageContainer>
    </Item>
  );
};

//  {groupedByDay[date].map(el => <Message key={el.id} el={el} />)}