import { useParams } from "react-router-dom";
import { Container } from "../../utils";

const AboutChannelPage = () => {
    const { channelId } = useParams();
    
    return (
        <Container>
         About Channel Page   {channelId}
        </Container>

    );
}

export default AboutChannelPage
