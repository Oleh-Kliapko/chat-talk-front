import styled from '@emotion/styled';
import { themes } from '@/styles';


export const MainContainer = styled.div`
width: ${themes.breakpoints.mobile}px;
`;
export const Title = styled.h1`
margin-top:170px;
margin-bottom:8px;
font-family:'Segoe-Bold';
font-size:${themes.fontSizes.xl};
font-weight:700;
color:${themes.colors.main};
`;
export const Text = styled.p`
margin-bottom:32px;
font-family:'Segoe-Regular';
font-size:${themes.fontSizes.m};
font-weight:400;
color:${themes.colors.grey};
`;