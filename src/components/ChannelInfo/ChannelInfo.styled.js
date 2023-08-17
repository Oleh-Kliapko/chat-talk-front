import styled from '@emotion/styled';
import { themes } from '@/styles';

export const MainContainer = styled.div`
width: ${themes.breakpoints.mobile}px;
display:flex;
flex-direction:column
`;
export const ImgContainer = styled.div`
width: 100%;
height:200px;
margin-top:64px;
margin-bottom:18px;
position: relative;
`
export const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;
`;
export const Button = styled.button`
position:absolute;
top:12px;
left:12px;
`;

export const MainText = styled.h4`
margin-top:6px;
font-family:'Segoe-Bold';
font-size: ${themes.fontSizes.m};
font-weight: 700;
color: ${themes.colors.main};
`;
export const Text = styled.p`
margin-bottom:16px;
font-family:'Segoe-Regular';
font-size: ${themes.fontSizes.s};
font-weight: 400;
color: ${themes.colors.grey};
`;
export const Description = styled.p`
font-family:'Segoe-Regular';
font-size: ${themes.fontSizes.m};
font-weight: 400;
color: ${themes.colors.main};
`;