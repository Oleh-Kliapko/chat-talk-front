import styled from '@emotion/styled';
import { themes } from '@/styles';

export const MainContainer = styled.div`
width: ${themes.breakpoints.mobile}px;
display:flex;
flex-direction:column;
margin-top:8px;
`
export const ImgContainer = styled.div`
width: 100%;
height:200px;
margin-top:24px;
margin-bottom:24px;
position: relative;
background-color:#EFEFEF;
object-fit: cover;
`
export const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;

`;

export const Button = styled.button`
position: absolute;
top:12px;
right:12px;
color:"white"

`;
export const ButtonBack = styled.button`
position:absolute;
top:12px;
left:12px;
`;
export const StyledInput = styled.input`
width:100%;
padding-top:12px;
padding-bottom:12px;
margin-top:8px;
margin-bottom:16px;
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
export const StyledTextarea = styled.textarea`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 8px;
  resize: none;
  border: none;
  border-bottom: 1px solid ${themes.colors.grey};
  font-family: 'Segoe-Regular';
  font-size: ${themes.fontSizes.m};
  font-weight: 400;
  color: ${themes.colors.main};
  overflow: hidden;
  background-color: ${themes.colors.mainBgr};
  line-height: 16px;
  &:focus {
    outline: none;
  }
`;

export const StyledLabel = styled.label`
font-family:'Segoe-SemiBold';
font-size: ${themes.fontSizes.l};
font-weight: 600;
color: ${themes.colors.main};
`;
export const LetterCounter = styled.p`
margin-left:auto;
font-family:'Segoe-Regular';
font-size:${themes.fontSizes.m};
font-weight:400;
color:${themes.colors.grey};
`;