import styled from '@emotion/styled';
import { themes } from '@/styles';


export const MainContainer = styled.div`
width: ${themes.breakpoints.mobile}px;
display:flex;
/* flex-direction:column; */
align-items:center;
margin-top:12px;
margin-bottom:24px;
`;
export const Image = styled.img`
display:block;
width:100%;
height:100%;
object-fit: cover;
`;

export const ImageContainer = styled.div`
width:76px;
height:76px;
margin-right:20px;
border-radius:50%;
overflow:hidden;
`;
export const InfoContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`;
export const MainText = styled.h4`
margin-bottom:4px;
font-family:'Segoe-Regular';
font-size:${themes.fontSizes.l};
font-weight:400;
color:${themes.colors.main};
`;
export const SecondaryText = styled.p`
font-family:'Segoe-Regular';
font-size:${themes.fontSizes.m};
font-weight:400;
color:${themes.colors.grey};
`;
