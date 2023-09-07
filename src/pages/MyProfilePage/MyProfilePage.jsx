import { useDispatch } from "react-redux";
import { Header } from "../../components/Header/Header"
import { ProfileOptionsList } from "../../components/ProfileOptionsList/ProfileOptionsList";
import { Container } from "../../utils"
import { useCallback, useState } from "react";
import { logOut } from "../../redux/auth/operations";
import { CreateModal } from "../../components/Modal";
import { SmallModal } from "../../components/Modal/SmallModal";
import { ProfileInfo } from "../../components/ProfileInfo/ProfileInfo";

const MyProfilePage = () => {
    const [modal, setModal] = useState(false);
    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();
    const showModal = useCallback(() => { setModal(true) }, []);
    const closeModal = useCallback(() => { setModal(false) }, []);
    const signOut = useCallback(async () => { setLoad(true); await dispatch(logOut()); setLoad(false) }, [dispatch]);
    return (
        <Container>
            <Header goBack={true} profileLink={false} title="Profile" />
            <ProfileInfo />
            <ProfileOptionsList showModal={showModal} />
            {modal && <CreateModal onClose={closeModal}>
                <SmallModal isLoading={load} yes={signOut} no={closeModal} title="Log Out?" subtitle="Are you sure want to log out?" />
            </CreateModal>}
        </Container>
    );
};

export default MyProfilePage