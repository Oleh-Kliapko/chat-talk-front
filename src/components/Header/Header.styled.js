import styled from '@emotion/styled';
import { themes } from '@/styles';
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
width: ${themes.breakpoints.mobile}px;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:50px;
`;
export const HeadContainer = styled.div`
display:flex;
align-items:flex-end;
`;
export const LinkContainer = styled.div`

`;
export const Button = styled.button`
margin-right:16px;
`;

export const MainText = styled.h1`
font-family:"Segoe-Bold";
font-size:${themes.fontSizes.xl};
font-weight:700;
line-height:1,4;
color:${themes.colors.main};
`;
export const StyledLink = styled(Link)`
color:${themes.colors.grey}
`;

export const ChannelImageBox = styled.div`
width:40px;
height:40px;
border-radius:50%;
overflow:hidden;
&:hover {
  cursor: pointer;
}
`;
export const Image = styled.img`
width:100%;
height:100%;
`

export const ChannelName = styled.h4`
font-family:"Segoe-Bold";
font-size:${themes.fontSizes.m};
font-weight:700;
color:${themes.colors.main};
`
export const Text = styled.p`
font-family:"Segoe-Regular";
font-size:${themes.fontSizes.m};
font-weight:400;
color:${themes.colors.accent};
&:hover{
  cursor: pointer;
}
`
