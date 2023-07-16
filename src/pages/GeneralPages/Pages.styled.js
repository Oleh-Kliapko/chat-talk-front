import styled from '@emotion/styled';
import { themes } from '@/styles';

export const Wrapper = styled.div`
  background-color: ${themes.colors.mainBgr};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props =>
    props.from === 'homepage' ? 'space-between' : 'none'};
`;
