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

export const MessageList = ({messages}) => {
  // data.sort(compareDates);
  function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0
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
  }

  const groupedByDay = messages.reduce((acc, obj) => {
  const date = formatDate(obj.date) // Извлечение даты в формате "YYYY-MM-DD"
  if (!acc[date]) {
    acc[date] = [];
  }
  acc[date].push(obj);
  return acc;
  }, {});
  
  console.log("data",groupedByDay);
  return (
    <MainContainer>
      <List>
        {Object.keys(groupedByDay).map(date => (
          <div key={date}>
            <DateContainer><DateTexts>{showDate(date)}</DateTexts><hr/></DateContainer>
                        <ul>
              {groupedByDay[date].map(el => <Message key={el.id} el={el} />)}
            </ul>
          </div>))}
      </List>
    </MainContainer>
  );
};

const Message = ({ el }) => {
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
        <ImgContainer>
          <Image src={el.image} alt={el.name} />
        </ImgContainer>
        {el.isOnline && <OnlineBox></OnlineBox>}
      </ProfileContainer>
      <MessageContainer owner={el.owner}>
        {!el.owner && <NameText>{el.name}</NameText>}
        <MessageText owner={el.owner}>{el.text}</MessageText>
        <DateText owner={el.owner}>{format12HourTime(el.date)}</DateText>
      </MessageContainer>
    </Item>
  );
};