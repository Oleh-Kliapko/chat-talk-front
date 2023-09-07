import styled from '@emotion/styled';
import { themes } from '@/styles';
export const ErrorBox = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
  /* margin-bottom: ${themes.spacing[4]}px; */
  margin-top:8px;
`;

export const ErrorText = styled.p`
font-size: ${themes.fontSizes.xxs};
  font-family: 'Segoe-Regular';
color:${themes.colors.error};
margin-left: 4px;
`

