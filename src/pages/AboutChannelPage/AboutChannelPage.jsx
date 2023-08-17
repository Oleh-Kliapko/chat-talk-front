import {
    useNavigate,
    // useParams
} from "react-router-dom";
import { Container } from "../../utils";
import { ChannelInfo } from "../../components/ChannelInfo/ChannelInfo";
import { useCallback, useState } from "react";
import { SmallModal } from "../../components/Modal/SmallModal";
import { CreateModal } from "../../components/Modal";
import { toast } from "react-toastify";

const AboutChannelPage = () => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    // const { channelId } = useParams();
    const onOpen = useCallback(() => { setOpenModal(true) }, []);
    const onClose = useCallback(() => { setOpenModal(false) }, []);
    const handleDelete = useCallback(() => {
        toast.success("channel was successfully deleted")
        navigate("/my-channels")
    }, [navigate]);
    return (
        <Container>
            <ChannelInfo onOpen={onOpen} />
            {openModal && <CreateModal onClose={onClose}>
                <SmallModal title="Delete the channel?" subtitle="You will not be able to recover it" yes={handleDelete} no={onClose} />
            </CreateModal>}
        </Container>
    );
};

export default AboutChannelPage
