import styled from '@emotion/styled';
import { themes } from '../../styles/themes';

export const EmailBox = styled.div`
top:0;
left:50%;
 transform: translate(-50%,-50%);
width:100px;
height:100px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border: 3px solid #DFC3FD;
background-color:${themes.colors.accent};
position: absolute;
`;

export const MainContainer = styled.div`
 width: 390px;
 text-align:center;
 padding:40px 20px;
 `
export const MainText = styled.h4`
margin-top:126px;
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
`
export const Text = styled.p`
margin-top:112px;
font-family:'Segoe-Regular';
font-weight:400;
font-size:${themes.fontSizes.m};
color:${themes.colors.grey};`

export const Button = styled.p`
margin-top:8px;
margin-bottom:45px;
color:${themes.colors.accent};
&:hover{
cursor:pointer;
} 
`  