import styled from '@emotion/styled';
import { themes } from '@/styles';


export const MainContainer = styled.div`
  width: ${themes.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${themes.colors.white};
`;
export const ButtonsContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:8px;
right:12px
`;
export const Input = styled.input`
width:100%;
/* padding:6px 6px 0 32px  ; */
padding-top:6px;
padding-bottom:6px;
padding-right:72px;
font-family:'Segoe-Regular';
font-size:${themes.fontSizes.s};
font-weight:400;
color:${themes.colors.main};
border:none;
&:focus{
border:none;
outline:none
}
`;
export const Button = styled.button`
&:first-of-type{
    margin-right:16px;
}
`;