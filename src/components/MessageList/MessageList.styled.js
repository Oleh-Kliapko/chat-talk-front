import styled from '@emotion/styled';
import { themes } from '@/styles';

export const MainContainer = styled.div`
width: ${themes.breakpoints.mobile}px;
height:665px;
      overflow: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
&::-webkit-scrollbar {
      width: 0;
      height: 0;
}
`;
// Item, ImgContainer, Image, MessageContainer, NameText, MessageText, DateText OnlineBox
export const List = styled.ul`
width:100%;
align-items:flex-start;

`;
export const Item = styled.li`
list-style: none;
display:flex;
flex-direction:${props => props.owner?"row-reverse":"row" };
margin-top:12px;
`;
export const ProfileContainer = styled.div`
position:relative;
width: 32px;
height: 32px;
margin-right:${props => props.owner ? "0" : "12px"};
margin-left:${props => props.owner? "12px":"0"};
`
export const ImgContainer = styled.div`
opacity:${props => props.repeatMsg ? "1" : "0"};
border-radius:50%;
overflow:hidden;

`;
export const Image = styled.img`
display:block;
width:100%;
height:auto;
`;
export const OnlineBox = styled.div`
width: 10px;
height: 10px;
background-color:#34C759;
position:absolute;
bottom:0;
right:0;
border: 1px solid white;
border-radius:50%;

`;

export const MessageContainer = styled.div`
width:60%;
height:auto;
 word-wrap: break-word;
padding:4px 8px;
background-color:${props => props.owner ? "#007AFF" : "#F2F2F7"};
/* border-radius:${props =>{if (props.owner) {return "6px 0px 6px 6px"} if(props.repeatMsg&&props.owner||props.repeatMsg&&!props.owner) {return "6px 6px 6px 6px"}if (!props.owner) {return "0px 6px 6px 6px"}}}; */
border-radius:${props => props.owner ? "6px 0px 6px 6px":"0px 6px 6px 6px"};
`;
export const NameText = styled.p`
margin-bottom:8px;
font-family:'Segoe-Regular';
font-size:${themes.fontSizes.s};
font-weight:600;
color:${themes.colors.main};
`;
export const MessageText = styled.p`

font-family:'Segoe-Regular';
font-size:${themes.fontSizes.s};
font-weight:400;
color:${props => props.owner ? "white" : themes.colors.main};
`;
export const DateText = styled.p`
margin-top:4px;
font-family:'Segoe-Regular';
font-size:${themes.fontSizes.xs};
font-weight:400;
color:${props => props.owner ? "white" : "#666668"};
text-align: right;
`;

export const DateTexts = styled.span`
/* margin-top:4px; */
position:absolute;
font-family:'Segoe-Regular';
font-size:${themes.fontSizes.xs};
font-weight:400;
color:"#666668";
border:1px solid #D3D3D3;
border-radius:20px;
padding:4px 8px;
top: 50%;
left: 50%; 
transform: translate(-50%, -50%); 
background-color:#FAFAFA;
`;
export const DateContainer = styled.div`
position:relative;
margin-top:26px;
margin-bottom:26px;
`;