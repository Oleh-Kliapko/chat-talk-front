import styled from '@emotion/styled';
import { themes } from '@/styles';


export const MainContainer = styled.div`
width: ${themes.breakpoints.mobile}px;
display:flex;
flex-direction:column;
align-items:center;
margin-top:12px;
`;
export const InputFileBox = styled.div`
width:36px;
height:36px;
border-radius:50%;
border: 1px solid #D3D3D3;
display:flex;
align-items:center;
justify-content:center;
position: absolute;
bottom: 0;
right: 0;
background-color:${themes.colors.white}
`
export const Box = styled.div`
position: relative;
`

export const ImageContainer = styled.div`
width:100px;
height:100px;
border-radius:50%;
overflow:hidden;
`
export const Image = styled.img`
width:100%;
height:100%;
`
export const StyledInput = styled.input`
width:100%;
padding-top:12px;
padding-bottom:12px;
margin-top:8px;
border:none;
border-bottom:1px solid ${themes.colors.grey};
font-family:'Segoe-Regular';
font-size:${themes.fontSizes.m};
font-weight:400;
color:${themes.colors.main};
background-color:${themes.colors.mainBgr};
&:focus{
    outline:none;
}
`;
export const StyledLabel = styled.label`

font-family:'Segoe-SemiBold';
font-size: ${themes.fontSizes.l};
font-weight: 600;
color: ${themes.colors.main};
`;
export const LabelBox = styled.div`
width:100%;
margin-top:24px;
`;