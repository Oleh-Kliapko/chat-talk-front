import { useCallback, useEffect, useRef, useState } from "react";
import { MainContainer, Text, ImgContainer,LetterCounter, InputFileBox, Image,Button ,StyledLabel,StyledInput,StyledTextarea} from "./CreateChannelForm.styled";
import { MdAddPhotoAlternate } from "react-icons/md";
import Pencil from "../../images/svg/Pencil";
import { BtnTemplate } from "../Buttons/BtnTemplate";
import { themes } from "../../styles/themes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createChannel } from "../../redux/channels/operations";
import { useDispatch, useSelector } from "react-redux";

 const textAreaInitialValue={
    value: '',
    rows: 1,
    maxRows: 5,
    maxLength: 120,
    lineHeight: 40, 
  };

export const CreateChannelForm = () => {
    const dispatch = useDispatch()
    const {user}= useSelector(state=>state.auth)
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [preview, setPreview] = useState(null);
    const [channelName, setChannelName] = useState('');
    const hiddenFileInput = useRef(null);
    const [textAreaValue, setTextAreaValue] = useState(textAreaInitialValue);
    const navigate = useNavigate()

    useEffect(() => {
        if (!selectedPhoto) return setPreview(undefined);
        const objectUrl = URL.createObjectURL(selectedPhoto);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedPhoto]);

    const handleTextAreaChange = useCallback((event) => {
        const { maxLength, maxRows, lineHeight } = textAreaValue;
        const textarea = event.target;
        textarea.style.height = 'auto';
        const height = textarea.scrollHeight;
        const currentRows = Math.ceil(height / lineHeight);
        const newRows = Math.min(currentRows, maxRows);
        if (textarea.value.length > maxLength) textarea.value = textarea.value.substring(0, maxLength);
        setTextAreaValue(prev => ({ ...prev, value: textarea.value, rows: newRows }));
        textarea.scrollTop = 0;
    }, [textAreaValue]);
    
    const handleClick = useCallback(() => { hiddenFileInput.current.click() }, []);
    const handleChange = useCallback(event => {
           if (!event.target.files[0]) return;
        if (event.target.files[0].size > 160000000000000) return toast.warn("file is too large");
        if (event.target.files[0].type === "image/jpeg"||event.target.files[0].type === "image/png"){
        console.log("event.target.files[0]",event.target.files[0].size);
            setSelectedPhoto(event.target.files[0]);
            return;
        }
        return toast.warn("wrong file type");
    }, []);

    const create = useCallback(async () => {
        const formData = new FormData();
       if(selectedPhoto){ formData.append('image', selectedPhoto)}
        formData.append('title', channelName);
        formData.append('description', textAreaValue.value);
        formData.append('owner', user.userId);
        if ( !textAreaValue.value || !channelName) return toast.warn('fill all the fields');
        const response = await dispatch(createChannel(formData));
        console.log("response", response);
        if (response.meta.requestStatus === "fulfilled") {
            toast.success("channel created");
            navigate(`/channels/${response.payload.id}`)
        } else { toast.error(response.error.message) }
    }, [channelName, dispatch, navigate, selectedPhoto, textAreaValue.value, user.userId]);

    return (
        <MainContainer>
            <Text>Create your own channel from below</Text>
            <ImgContainer>
                {preview ? <>
                    <Image src={preview} alt="channel-image" />
                    <Button onClick={handleClick} type="button">
                        <Pencil />
                    </Button>
                    <input type="file"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                    />
                </> :
                    <InputFileBox>
                        <button type="button">
                            <MdAddPhotoAlternate onClick={handleClick} size={100} color="#909090" />
                        </button>
                        <input type="file"
                            ref={hiddenFileInput}
                            onChange={handleChange}
                            style={{ display: 'none' }}
                        />
                    </InputFileBox>}
            </ImgContainer>
            <StyledLabel>Channel Name<StyledInput type="text" name="name" value={channelName} onChange={(e) => setChannelName(e.target.value)} placeholder="Channel name" />
            </StyledLabel>
            <StyledLabel>Description<StyledTextarea name="description"
                rows={textAreaValue.rows}
                value={textAreaValue.value}
                onChange={handleTextAreaChange}
                maxLength={textAreaValue.maxLength}
                placeholder="Write here..."
            ></StyledTextarea></StyledLabel>
            <LetterCounter>{textAreaValue.value.length}/{textAreaValue.maxLength}</LetterCounter>
            <BtnTemplate
                onClick={create}
                text="Create"
                textSize={themes.fontSizes.m}
                color={themes.colors.white}
                width="100%"
                height={`${themes.spacing[12]}px`}
                gradient={themes.colors.mainBtnBgr}
                hoverGradient={themes.colors.accentBtnBgr}
                border={themes.border.main}
                borderRadius={themes.radii.main}
                marginTop={`150px`}
                marginBottom={`auto`}
                type="button" />
        </MainContainer>
    );
}

