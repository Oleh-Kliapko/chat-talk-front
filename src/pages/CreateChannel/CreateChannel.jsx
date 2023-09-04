import { CreateChannelForm } from "../../components/CreateChannelForm/CreateChannelForm";
import { Header } from "../../components/Header/Header"
import { Container } from "../../utils"

const CreateChannel = () => {
  return (
    <Container>
      <Header title='Create channel' goBack={true} />
      <CreateChannelForm />
    </Container>
  );
}

export default CreateChannel
