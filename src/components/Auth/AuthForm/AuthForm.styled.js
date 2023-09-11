import styled from '@emotion/styled';
import { themes } from '@/styles';

export const Wrapper = styled.div`
  width: ${themes.breakpoints.mobile}px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Title = styled.div`
  color: ${themes.colors.main};
  font-family: 'Segoe-Regular';
  font-size: ${themes.fontSizes.m};
  margin-bottom: ${themes.spacing[2]}px;
`;

export const InputWrapper = styled.div`
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

export const Error = styled.div`
  /* color: ${themes.colors.error};
  font-size: ${themes.fontSizes.xxs};
  font-family: 'Segoe-Regular'; */
  margin-bottom: ${themes.spacing[4]}px;
  /* align-self: flex-start; */
`;

export const ShowPasswordBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 16px;
  color: ${themes.colors.second};
`;
