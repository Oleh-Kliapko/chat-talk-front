import { useDispatch } from "react-redux";
import { Header } from "../../components/Header/Header"
import { ProfileOptionsList } from "../../components/ProfileOptionsList/ProfileOptionsList";
import { Container } from "../../utils"
import { useCallback, useState } from "react";
import { logOut } from "../../redux/auth/operations";
import { CreateModal } from "../../components/Modal";
import { SmallModal } from "../../components/Modal/SmallModal";
import { ProfileInfo } from "../../components/ProfileInfo/ProfileInfo";


export const MyProfilePage = () => {
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const showModal = useCallback(() => { setModal(true) }, []);
    const closeModal = useCallback(() => { setModal(false) }, []);
    const signOut = useCallback(async () => { dispatch(logOut()) }, [dispatch]);
    return (
        <Container>
            <Header goBack={true} profileLink={true} title="Profile"  />
            <ProfileInfo/>
            <ProfileOptionsList showModal={showModal} />
            {modal && <CreateModal onClose={closeModal}>
                <SmallModal yes={signOut} no={closeModal} title="Log Out?" subtitle="Are you sure want to log out?" />
            </CreateModal>}
        </Container>
    );
}

