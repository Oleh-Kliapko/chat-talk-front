import styled from '@emotion/styled';
import { themes } from '@/styles';

export const LogoWrapper = styled.div`
  margin-top: ${props => (props.from === 'homepage' ? '169px' : '156px')};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${themes.colors.main};
  font-family: 'Segoe-Bold';
  font-size: ${props =>
    props.from === 'homepage' ? themes.fontSizes.xxl : themes.fontSizes.xl};
  padding-top: ${props =>
    props.from === 'homepage' ? themes.spacing[8] : themes.spacing[3]}px;
  padding-bottom: ${props =>
    props.from === 'homepage' ? themes.spacing[2] : themes.spacing[8]}px;
`;

export const Slogan = styled.h4`
  color: ${themes.colors.second};
  font-family: 'Segoe-Regular';
  font-size: ${themes.fontSizes.m};
  padding: 0;
`;
