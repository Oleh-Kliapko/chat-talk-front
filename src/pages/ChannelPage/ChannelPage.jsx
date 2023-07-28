import { useParams } from "react-router-dom";


const ChannelPage = () => {
 const { channelId } = useParams();
  return <div>Channel Page id--{channelId }</div>;
};

export default ChannelPage;
