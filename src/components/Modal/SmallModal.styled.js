import styled from '@emotion/styled';
import { themes } from '@/styles';

export const MainContainer = styled.div`
  width: 260px;
  padding-left:20px;
  padding-right:20px;
  background-color:${themes.colors.white};
  text-align:center;
`;

export const MainText = styled.h4`
font-family:'Segoe-Semibold';
font-weight:600;
font-size:${themes.fontSizes.l};
color:${themes.colors.main};
`;
export const Text = styled.p`
font-family:'Segoe-Regular';
font-weight:400;
font-size:${themes.fontSizes.m};
color:${themes.colors.grey};
`;
export const ButtonsContainer = styled.div`
display:flex;
justify-content:space-between;
margin-top:32px;
`;