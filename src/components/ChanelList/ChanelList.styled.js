import styled from '@emotion/styled';
import { themes } from '@/styles';

export const MainContainer = styled.div`
width: ${themes.breakpoints.mobile}px;
overflow-y:scroll;
&::-webkit-scrollbar {
      width: 0;
      height: 0;
}
`;
export const List = styled.ul`

`;
