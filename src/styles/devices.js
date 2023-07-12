import { themes } from './themes';

const { breakpoints } = themes;

export const device = {
  mobileBefore: `(max-width: ${breakpoints.mobile - 0.02}px)`,
  mobile: `(min-width: ${breakpoints.mobile}px)`,
  mobileOnly: `(min-width: ${breakpoints.mobile}px) and (max-width: ${
    breakpoints.tablet - 0.02
  }px)`,
  tabletBefore: `(max-width: ${breakpoints.tablet - 0.02}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  tabletOnly: `(min-width: ${breakpoints.tablet}px) and (max-width: ${
    breakpoints.desktop - 0.02
  }px)`,
  desktopBefore: `(max-width: ${breakpoints.desktop - 0.02}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
  retina: `(min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx)`,
};
