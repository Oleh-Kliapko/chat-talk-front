
import { AvatarIcon } from "../../images/reactIcons";
import Plus from "../../images/svg/Plus"
import { MainContainer, HeadContainer, LinkContainer, MainText, StyledLink } from "./Header.styled";
import PropTypes from 'prop-types';

export const Header = ({title}) => {
    return (
        <MainContainer>
            <HeadContainer>
                <MainText>{title}</MainText>
            </HeadContainer>
            <LinkContainer>
                <StyledLink to='/create-channel'><Plus size={20} /></StyledLink>
                <StyledLink to='/channels'><AvatarIcon size={40} /></StyledLink>
            </LinkContainer>
        </MainContainer>
    );
}
Header.propTypes = {
  title: PropTypes.string,
};
