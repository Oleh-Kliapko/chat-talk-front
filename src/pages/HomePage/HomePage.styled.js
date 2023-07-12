import styled from '@emotion/styled';
import { themes } from '../../styles';

export const Wrapper = styled.div`
  background-color: ${themes.colors.mainBgr};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  margin-top: 169px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${themes.colors.main};
  font-family: 'Segoe-Bold';
  font-size: ${themes.fontSizes.xxl};
  padding-top: ${themes.spacing[8]}px;
  padding-bottom: ${themes.spacing[2]}px;
`;

export const Slogan = styled.h4`
  color: ${themes.colors.second};
  font-family: 'Segoe-Regular';
  font-size: ${themes.fontSizes.m};
  padding: 0;
`;
