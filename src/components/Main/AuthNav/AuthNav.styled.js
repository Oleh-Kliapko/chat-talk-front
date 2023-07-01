import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { themes } from '@/styles';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: ${themes.spacing[2]}px;
  padding-left: ${themes.spacing[4]}px;
  gap: ${themes.spacing[4]}px;
  width: 100vw;
  background-color: ${themes.colors.black};
  box-shadow: ${themes.colors.black};
`;

export const NavBarItem = styled(NavLink)`
  font-size: ${themes.fontSizes.xl};
  display: block;
  text-decoration: none;

  &.active {
    color: ${themes.colors.white};
    border-bottom: ${themes.spacing[1]};
  }
`;
