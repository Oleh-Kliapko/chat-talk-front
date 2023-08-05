import styled from '@emotion/styled';
import { themes } from '../../styles/themes';

export const MainContainer = styled.div`
 min-width: 390px;
 padding:40px 20px;
 `
 export const MainText = styled.h4`
font-family:'Segoe-Bold';
font-weight:700;
font-size:${themes.fontSizes.xl};
color:${themes.colors.main};
`
export const SecondaryText = styled.p`
margin-top:8px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${themes.fontSizes.m};
color:${themes.colors.main};
`;
export const InputWrapper = styled.div`
margin-top:8px;
  position: relative;
`;
export const Input = styled.input`
  width: 100%;
  color: ${themes.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${themes.fontSizes.m};
  padding: ${themes.spacing[3]}px ${themes.spacing[0]}px ${themes.spacing[3]}px
    ${themes.spacing[10]}px;
  border: ${themes.border.main};
  border-radius: ${themes.radii.main};

  &:focus,
  &:hover {
    outline: none;
    border: ${themes.border.accent};
    box-shadow: 0 0 0 1px ${themes.colors.accent};
  }
`;

export const LabelWrapper = styled.div`
  margin-top:32px;
`;