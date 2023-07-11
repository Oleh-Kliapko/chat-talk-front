import styled from '@emotion/styled';
import { themes } from '@/styles';

export const Wrapper = styled.div`
  background-color: ${themes.colors.mainBgr};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${themes.colors.main};
  font-family: 'Segoe-Bold';
`;
