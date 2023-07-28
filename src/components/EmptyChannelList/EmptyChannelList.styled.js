import styled from '@emotion/styled';
import { themes } from '@/styles';
import { Link } from "react-router-dom";


export const MainContainer = styled.div`
width: ${themes.breakpoints.mobile}px;
display:flex;
flex-direction:column;
align-items:center;
padding-top:100px;
`;
export const Text = styled.p`
margin-top:100px;
font-size:${themes.fontSizes.m};
font-weight: 400;
font-family:"Segoe-Regular";
color:${themes.colors.main};
`;
export const StyledLink = styled(Link)`
margin-top:20px;
text-decoration:underline;
color:${themes.colors.main};
&:hover{
    cursor: pointer;
}
`;
