import styled from '@emotion/styled';
import { themes } from '@/styles';


export const MainContainer = styled.div`
  width: ${themes.breakpoints.mobile}px;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:8px;
`;

export const Lis = styled.ul`
width:100%;
`;

export const ListItem = styled.li`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
padding: 12px 0;
border-bottom: 1px solid  #D9D9D9;
&:hover{
    cursor: pointer;
    scale:1.01;
}
`;
export const Box = styled.div`
display:flex;
`;

export const IconContainer = styled.div`
width:40px;
height:40px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
background-color:#EFEFEF;
`;

export const Text = styled.p`
margin-top:auto;
margin-bottom:auto;
margin-left:16px;
font-family: 'Segoe-Regular';
  font-size: ${themes.fontSizes.m};
  font-weight: 400;
  color: ${themes.colors.main};
`;