import { useCallback, useEffect, useState } from "react"
import { EditProfileForm } from "../../components/EditProfileForm/EditProfileForm"
import { Header } from "../../components/Header/Header"
import { Container } from "../../utils"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { CreateModal } from "../../components/Modal"
import { SmallModal } from "../../components/Modal/SmallModal"
import { deleteUser, logOut, updatehUser } from "../../redux/auth/operations"

export const EditProfilePage = () => {
  const navigate = useNavigate();
  const { avatarURL, username } = useSelector(state => state.auth.user);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [userName, setUserName] = useState("");
  const [preview, setPreview] = useState(avatarURL);
  const [openModal, setOpenModal] = useState(false);
  const onOpen = useCallback(() => { setOpenModal(true) }, []);
  const onClose = useCallback(() => { setOpenModal(false) }, []);
  const dispatch = useDispatch();
  console.log('selectedPhoto', selectedPhoto);

  const handleDelete = useCallback(async () => {
    dispatch(deleteUser());
    dispatch(logOut())
    toast.success("Account was successfully deleted")
    navigate("/")
  }, [dispatch, navigate]);

  useEffect(() => {
    if (selectedPhoto === null) return;
    const objectUrl = URL.createObjectURL(selectedPhoto);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [avatarURL, selectedPhoto, setPreview]);
  
  const handleSubmit = useCallback(async () => {
    const formData = new FormData();
    if (selectedPhoto !== null) { formData.append("profile_photo", selectedPhoto) }
    if (userName === "") {
      formData.append('username', username);
    } else {
      formData.append('username', userName);
    }
    if (userName === "" && selectedPhoto === null) return toast.warn("nothing no change");
    dispatch(updatehUser(formData));
    // toast.success("profile info changed successfully");
    return navigate("/my-profile");
  }, [dispatch, navigate, selectedPhoto, userName, username]);
  
  return (
    <Container>
      <Header subTitle="Account" goBack={true} done={handleSubmit} />
      <EditProfileForm
        preview={preview}
        setSelectedPhoto={setSelectedPhoto}
        username={username}
        setUserName={setUserName}
        userName={userName}
        onOpen={onOpen}
      />
      {openModal && <CreateModal onClose={onClose}>
        <SmallModal title="Delete Account?" subtitle="Are you sure want to delete your account?" yes={handleDelete} no={onClose} />
      </CreateModal>}
    </Container>
  );
};


