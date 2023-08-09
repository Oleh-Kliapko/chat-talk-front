import { ChanelList } from "../../components/ChanelList/ChanelList"
import { Header } from "../../components/Header/Header"
import { Container } from "../../utils"

export const MyChannelsPage = () => {
  return (
    <Container>
      <Header title="My Channels" goBack={true} profileLink={true} addChannelLink={true} />
      <ChanelList from={"My Channels"} />
    </Container>
  )
}

