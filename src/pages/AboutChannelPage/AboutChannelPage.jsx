import {
    useNavigate,
    useParams
} from "react-router-dom";
import { Container } from "../../utils";
import { ChannelInfo } from "../../components/ChannelInfo/ChannelInfo";
import { useCallback, useState } from "react";
import { SmallModal } from "../../components/Modal/SmallModal";
import { CreateModal } from "../../components/Modal";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deleteChannelById } from "../../redux/channels/operations";

const AboutChannelPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const { channelId } = useParams();
    const { userId } = useSelector(state => state.auth.user);
    const { currentChannel } = useSelector(state => state.channels);
    const onOpen = useCallback(() => { setOpenModal(true) }, []);
    const onClose = useCallback(() => { setOpenModal(false) }, []);
    const handleDelete = useCallback(async () => {
        const result = await dispatch(deleteChannelById(channelId));
        if (result.meta.requestStatus === "fulfilled") {
            toast.success("channel was successfully deleted")
            navigate("/channels")
        } else {
            toast.error(result.error.message)
        }
    }, [channelId, dispatch, navigate]);

    const owner = Boolean(toString(userId) === toString(currentChannel??owner));
    return (
        <Container>
            <ChannelInfo owner={owner} currentChannel={currentChannel} onOpen={onOpen} />
            {openModal && <CreateModal onClose={onClose}>
                <SmallModal title="Delete the channel?" subtitle="You will not be able to recover it" yes={handleDelete} no={onClose} />
            </CreateModal>}
        </Container>
    );
};

export default AboutChannelPage
