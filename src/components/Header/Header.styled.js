import styled from '@emotion/styled';
import { themes } from '@/styles';
import { Link } from "react-router-dom";

// export const MainContainer = styled.div`
//   width: ${themes.breakpoints.mobile}px;
// `;
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

