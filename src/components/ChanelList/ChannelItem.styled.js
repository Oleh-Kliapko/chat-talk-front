import styled from '@emotion/styled';
import { themes } from '@/styles';

export const Item = styled.li`
position:relative;
height:90px;
margin-top:8px;
padding:8px;
display:flex;
border-radius:${themes.radii.main};
border:${themes.border.input};
&:hover{
    background-color:${themes.colors.accent};
    color:${themes.colors.white};
    cursor: pointer;
}
`;
export const ImageBox = styled.div`
margin-right:8px;
`;
export const InfoContainer = styled.div`
display:flex;
flex-direction:column;
`;
export const Image = styled.img`
border-radius:50%;
width:40px;
height:40px;
`;
export const Title = styled.p`
font-size:${themes.fontSizes.m};
font-weight:700;
margin-bottom:8px;
`;
export const Text = styled.p`
font-size:14px;
font-weight:400;
`;
export const Date = styled.div`
position:absolute;
top:8px;
right:8px;
font-size:14px;
font-weight:300
`;