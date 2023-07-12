import styled from '@emotion/styled';

export const Button = styled.button`
  color: ${props => props.color};
  font-size: ${props => props.textSize};
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props =>
    props.gradient ? props.gradient : props.backgroundColor};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};

  &:hover {
    background: ${props =>
      props.hoverGradient ? props.hoverGradient : props.hoverBackgroundColor};
    color: ${props => props.hoverColor};
  }
`;
