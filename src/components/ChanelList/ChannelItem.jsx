import PropTypes from 'prop-types';
import {Item,ImageBox,Title,Text,DateText,InfoContainer,Image} from "./ChannelItem.styled"
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const ChannelItem = ({ channel }) => {
    const { title, description, image, created_at } = channel;
    const navigate = useNavigate();
    const truncateString = useCallback((str, maxLength) => {
        if (str.length > maxLength) return str.substring(0, maxLength) + '...';
        return str;
    }, []);

    const formatedDate = useCallback(() => {
        const inputDate = new Date(created_at);
        const day = String(inputDate.getUTCDate()).padStart(2, '0');
        const month = String(inputDate.getUTCMonth() + 1).padStart(2, '0');
        const year = inputDate.getUTCFullYear();
        return `${day}.${month}.${year}`;
    },[created_at])


    return (
        <Item onClick={() => { navigate(`/channels/${channel.id}`)}} >
            <ImageBox> <Image src={image} alt="chanel image" width={40} height={40} /></ImageBox>
            <InfoContainer>
                <Title>{title}</Title>
                <Text>{truncateString(description,90)}</Text>
            </InfoContainer>
            <DateText>{formatedDate()}</DateText>
        </Item>
    );
}

ChannelItem.propTypes = {
    channel: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
        created_at: PropTypes.string,
    owner: PropTypes.number,
    }),
};
