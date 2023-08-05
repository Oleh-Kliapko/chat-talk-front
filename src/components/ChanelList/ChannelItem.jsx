import PropTypes from 'prop-types';
import {Item,ImageBox,Title,Text,Date,InfoContainer,Image} from "./ChannelItem.styled"
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const ChannelItem = ({ channel }) => {
    const { name, description, imageUrl, lastComment } = channel;
    const navigate = useNavigate();
    const truncateString = useCallback((str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        }
        return str;
    }, []);
    
    return (
        <Item onClick={() => { navigate(`/channels/${channel.id}`)}} >
            <ImageBox> <Image src={imageUrl} alt="chanel image" width={40} height={40} /></ImageBox>
            <InfoContainer>
                <Title>{name}</Title>
                <Text>{truncateString(description,90)}</Text>
            </InfoContainer>
            <Date>{lastComment}</Date>
        </Item>
    );
}

ChannelItem.propTypes = {
    channel: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    lastComment: PropTypes.string,
    }),
};
