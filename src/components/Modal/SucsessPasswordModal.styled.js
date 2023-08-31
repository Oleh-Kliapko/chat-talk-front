import styled from '@emotion/styled';
import { themes } from '@/styles';

export const MainContainer = styled.div`
  width: 100%;
  position:relative;
  background-color:${themes.colors.white};
  text-align:center;
`;
export const SuccessContainer = styled.div`
  width:  100px;
  height:  100px;
  position:absolute;
  background-color:#31D42E;
  border-radius:50%;
  border:3px solid #9DFD7B;
  display:flex;
  align-items:center;
  justify-content:center;
  top:-164px;
  left:calc(50% - 50px);;
`;

export const MainText = styled.h4`
margin-top:74px;
font-family:'Segoe-Bold';
font-weight:700;
font-size:${themes.fontSizes.xl};
color:${themes.colors.main};
`;
export const Text = styled.p`
font-family:'Segoe-Regular';
font-weight:400;
font-size:${themes.fontSizes.m};
color:${themes.colors.main};
margin-top:8px;
margin-bottom:32px
`;
// export const ButtonsContainer = styled.div`
// display:flex;
// justify-content:space-between;
// margin-top:32px;
// `;