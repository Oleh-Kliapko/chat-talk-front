import styled from '@emotion/styled';
import { themes } from '@/styles';

export const MainContainer = styled.div`
width: ${themes.breakpoints.mobile}px;
display:flex;
align-items:center;
margin-top:12px;
`
export const Lis = styled.ul`
margin-top:12px;
width:100%;
`;

export const ListItem = styled.li`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:0;
&:not(:first-of-type){
    margin-top:12px;
}
&:hover{
    cursor: pointer;
    scale:1.01;
}
`;
export const Box = styled.div`
display:flex;
flex-direction:column;
`;
export const Text = styled.p`
/* margin-top:auto;
margin-bottom:auto; */
font-family: 'Segoe-Regular';
  font-size: ${themes.fontSizes.m};
  font-weight: 400;
  color: ${themes.colors.main};
`;
export const SecondaryText = styled.p`
/* margin-top:auto;
margin-bottom:auto; */
font-family: 'Segoe-Regular';
  font-size: ${themes.fontSizes.m};
  font-weight: 400;
  color: ${themes.colors.grey};
`;



// export const StyledInput = styled.input`
// width:100%;
// /* padding-top:12px;
// padding-bottom:12px; */
// margin-top:4px;
// border:none;
// /* border-bottom:1px solid ${themes.colors.grey}; */
// font-family:'Segoe-Regular';
// font-size:${themes.fontSizes.m};
// font-weight:400;
// color:${themes.colors.main};
// background-color:${themes.colors.mainBgr};
// &:focus{
//     outline:none;
// }
// `;
// export const StyledLabel = styled.label`
// font-family:'Segoe-SemiBold';
// font-size: ${themes.fontSizes.m};
// font-weight: 600;
// color: ${themes.colors.main};
// `;
// export const LabelBox = styled.div`
// width:100%;
// /* margin-top:24px; */
// `;
// export const ArrowContainer = styled.div`

// color:${themes.colors.grey};
// &:hover{
//   cursor: pointer;
// }
// `;