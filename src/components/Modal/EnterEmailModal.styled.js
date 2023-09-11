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
  color:${({error})=>error?themes.colors.error:themes.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${themes.fontSizes.m};
  padding: ${themes.spacing[3]}px ${themes.spacing[0]}px ${themes.spacing[3]}px
    ${themes.spacing[10]}px;
  border: ${({error})=>error? themes.border.error:themes.border.main};
  border-radius: ${themes.radii.main};
  background-color: ${({error})=>error? "#FFF2F4":"white"};
   &:focus,
  &:hover {
    outline: none;
   border: ${({ error }) => error ? themes.border.error : themes.border.accent};
   box-shadow: ${({ error }) => error ? `0 0 0 1px ${themes.colors.error}` : `0 0 0 1px ${themes.colors.accent}`};
  }
  &::placeholder {
  color:${({ error }) => error ? themes.colors.error : themes.colors.grey};
}
`;

export const LabelWrapper = styled.div`
  margin-top:32px;
`;
export const Error = styled.div`
  /* color: ${themes.colors.error};
  font-size: ${themes.fontSizes.xxs};
  font-family: 'Segoe-Regular'; */
  margin-bottom: ${themes.spacing[4]}px;
  /* align-self: flex-end; */
`;