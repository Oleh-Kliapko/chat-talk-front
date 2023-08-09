import styled from '@emotion/styled';
import { themes } from '@/styles';


export const MainContainer = styled.div`
  width: ${themes.breakpoints.mobile}px;
  display:flex;
  align-items:center;
  margin-top:8px;
`;
export const SearchContainer = styled.div`
position:relative;
  flex: 1;
`;
export const LoupeContainer = styled.div`
position:absolute;
top:8px;
left:8px;
color:${themes.colors.grey};
`;
export const CloseContainer = styled.div`
position:absolute;
top:11px;
right:11px;
color:#4C4C4C;
&:hover{
  cursor: pointer;
}
`;
export const FilterContainer = styled.div`
position:relative;
`;
export const StyledInput = styled.input`
width:100%;
height:40px;
padding-left:32px;
padding-right:32px;
font-size:${themes.fontSizes.m};
font-weight: 400;
font-family:"Segoe-Regular";
border: ${themes.border.main};
border-radius: ${themes.radii.main};
`;
export const OptionsContainer = styled.div`
width:100px;
position:absolute;
border-radius:${themes.radii.main};
box-shadow:${themes.shadows.main};
background-color:${themes.colors.white};
padding:10px;
display:flex;
flex-direction:column;
gap:16px; 
bottom:-150%;
right:0;
z-index:2;
`;
export const Text = styled.div`
font-size:${themes.fontSizes.m};
font-family:"Inter-Regular";
&:hover{
 color:${themes.colors.accent};
 font-weight:600;
 cursor: pointer;
}
`
export const List = styled.ul`
width:100%;
position:absolute;
border-radius:${themes.radii.main};
box-shadow:${themes.shadows.main};
background-color:${themes.colors.white};
z-index:1;
`
export const Item = styled.li`
position: relative;
padding:8px;
height:40px;
&:hover{
  cursor: pointer;
}
`;
export const ArrowContainer = styled.div`
position:absolute;
color:${themes.colors.grey};
top:8px;
right:8px;
&:hover{
  cursor: pointer;
}
`;
export const Button = styled.button`
margin:0;
`
