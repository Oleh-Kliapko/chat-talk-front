import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { themes } from '@/styles';

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
  transition: transform 0.5s ease;

  &:hover {
    background: ${props =>
      props.hoverGradient ? props.hoverGradient : props.hoverBackgroundColor};
    color: ${props => props.hoverColor};
    transform: scale(1.05);
  }
`;

export const RedirectWrapper = styled.div`
  display: flex;
  gap: ${themes.spacing[4]}px;
  font-family: 'Segoe-Semibold';
  font-size: ${themes.fontSizes.s};
`;

export const RedirectTitle = styled(Link)`
  color: ${themes.colors.accent};
`;

export const ForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: end;
  color: ${themes.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${themes.fontSizes.m};
  &:hover{
    cursor:pointer
  }
`;
