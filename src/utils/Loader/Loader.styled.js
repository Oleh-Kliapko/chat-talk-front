import styled from '@emotion/styled';

import { themes } from '@/styles';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${themes.colors.black};
  opacity: 0.4;
`;
