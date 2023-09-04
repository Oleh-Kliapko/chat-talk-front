import { useCallback, useEffect, useRef, useState } from "react";
import { Button, ButtonBack, Image, ImgContainer, LetterCounter, MainContainer, StyledInput, StyledLabel, StyledTextarea } from "./EditChannelForm.styled";
import { Pencil } from "../../images/svg";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "../../images/reactIcons";
import { BtnTemplate } from "../Buttons/BtnTemplate";
import { themes } from "../../styles/themes";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateChannel } from "../../redux/channels/operations";
import { Loader } from "../../utils";

// const textAreaInitialValue = {
//     value: channel.description,
//     rows: 4,
//     maxRows: 5,
//     maxLength: 120,
//     lineHeight: 40,
// };

export const EditChannelForm = () => {
    const { currentChannel } = useSelector(state => state.channels);
    const { id, title, description, image } = currentChannel;
    console.log('currentChannel', currentChannel);
    const textAreaInitialValue = {
    value: description,
    rows: 4,
    maxRows: 5,
    maxLength: 120,
    lineHeight: 40,
    };
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [preview, setPreview] = useState(image);
    const [textAreaValue, setTextAreaValue] = useState(textAreaInitialValue);
    const [channelName, setChannelName] = useState(title);
    const [loading, setLoading] = useState(false);
    const hiddenFileInput = useRef(null);
    useEffect(() => {
        if (!selectedPhoto) return
        const objectUrl = URL.createObjectURL(selectedPhoto);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedPhoto]);
    const handleChange = useCallback(event => {
        if (!event.target.files[0]) return;
        if (event.target.files[0].size > 160000000000000) return toast.warn("file is too large");
        if (event.target.files[0].type === "image/jpeg"||event.target.files[0].type === "image/png"){
            console.log("event.target.files[0]", event.target.files[0].size);
            setSelectedPhoto(event.target.files[0]);
            return;
        }
        return toast.warn("wrong file type");
    }, []);
    const handleClick = useCallback(() => { hiddenFileInput.current.click() }, []);

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

    const editChannel = useCallback(async () => {
        setLoading(true)
        if (!selectedPhoto && textAreaValue.value === description && channelName === title) {
           setLoading(false)
            return toast.warn('Nothing to change')
        }
        const formData = new FormData();
        if (selectedPhoto) {
            formData.append('image', selectedPhoto)
        }
        formData.append('title', channelName);
        formData.append('description', textAreaValue.value);
        const result = await dispatch(updateChannel({ id, formData }));
        console.log('result', result)
        if (result.meta.requestStatus === "fulfilled") {
            toast.success("channel Changed successfully");
            setLoading(false)
            return navigate(`/channels/${id}`);
        } else {
            setLoading(false)
            return toast.error(result.payload);
        }
    }, [channelName, description, dispatch, id, navigate, selectedPhoto, textAreaValue.value, title]);

    return (
        <MainContainer>
            <>
                <ImgContainer>
                <Image src={preview} alt="channel-image" />
           { !loading &&  <>  <Button onClick={handleClick} type="button">
                    <Pencil />
                </Button>
                <input type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                />
                    <ButtonBack onClick={() => navigate(-1)}><ArrowBackIcon size={24} fill="#fff" /></ButtonBack>
                </>}
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
                disabled={loading}
                onClick={editChannel}
                text={loading ? "Wait..." : "Confirm"}
                textSize={themes.fontSizes.m}
                color={themes.colors.white}
                width="100%"
                height={`${themes.spacing[12]}px`}
                gradient={themes.colors.mainBtnBgr}
                hoverGradient={themes.colors.accentBtnBgr}
                border={themes.border.main}
                borderRadius={themes.radii.main}
                marginTop={`200px`}
                marginBottom={`auto`}
                    type="button" />
            </>
           { loading && <Loader/>}
        </MainContainer>
    );
}

