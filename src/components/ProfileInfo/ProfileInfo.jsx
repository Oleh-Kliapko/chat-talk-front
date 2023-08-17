import { useSelector } from "react-redux";
import { Image, ImageContainer, InfoContainer, MainContainer, MainText, SecondaryText } from "./ProfileInfo.styled"

export const ProfileInfo = () => {
    const { user } = useSelector(state => state.auth);
    console.log("user",user);
    return (
        <MainContainer>
            <ImageContainer><Image src={user.avatarURL} alt={user.username} /></ImageContainer>
            <InfoContainer>
                <MainText>{user.username}</MainText>
                <SecondaryText>{user.email}</SecondaryText>
            </InfoContainer>
        </MainContainer>
    );
};