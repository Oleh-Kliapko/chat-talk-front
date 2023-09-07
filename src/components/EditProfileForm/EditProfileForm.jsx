import { useCallback, useRef } from "react";
import { Image, ImageContainer, InputFileBox, MainContainer,Box, StyledLabel, StyledInput, LabelBox } from "./EditProfileForm.styled"
import { BiSolidCamera } from "react-icons/bi";
import PropTypes from 'prop-types';
import { BtnTemplate } from "../Buttons/BtnTemplate";
import { themes } from "../../styles/themes";
import { toast } from "react-toastify";

export const EditProfileForm = ({
    preview, userName, setSelectedPhoto, username, setUserName,onOpen
}) => {
    const hiddenFileInput = useRef(null);
    const handleClick = useCallback(() => { hiddenFileInput.current.click() }, []);
    const handleChange = useCallback(event => {
        if (!event.target.files[0]) return;
        if (event.target.files[0].size > 160000000000000) return toast.warn("file is too large");
        if (event.target.files[0].type === "image/jpeg"||event.target.files[0].type === "image/png"){
        // console.log("event.target.files[0]",event.target.files[0].size);
            setSelectedPhoto(event.target.files[0]);
            return
        }
         return toast.warn("wrong file type");
    }, [setSelectedPhoto]);
    return (
        <MainContainer>
            <Box>
                <ImageContainer>
                    <Image src={preview} alt="channel-image" />
                </ImageContainer>
                <InputFileBox>
                    <BiSolidCamera onClick={handleClick} size={24} />
                    <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: 'none' }} />
                </InputFileBox>
            </Box>
            <LabelBox>
                <StyledLabel>Username<StyledInput type="text" name="name" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder={username} />
                </StyledLabel>
            </LabelBox>
            <BtnTemplate
                onClick={onOpen}
                text="Delete Account"
                textSize={themes.fontSizes.m}
                color={themes.colors.main}
                width="100%"
                height={`${themes.spacing[12]}px`}
                hoverGradient={themes.colors.accentBtnBgr}
                border={themes.border.main}
                borderRadius={themes.radii.main}
                marginTop={`415px`}
                marginBottom={`auto`}
                type="button"
            />
        </MainContainer>
    );
};

EditProfileForm.propTypes = {
    setSelectedPhoto: PropTypes.func,
    setUserName: PropTypes.func,
    onOpen: PropTypes.func,
    preview: PropTypes.string,
    userName: PropTypes.string,
    username: PropTypes.string,
};