export const themes = Object.freeze({
  breakpoints: {
    mobile: 375,
    tablet: 768,
    desktop: 1440,
  },
  colors: {
    main: '#000',
    second: '#4C4C4C',
    accent: '#9747FF',
    placeholder: 'rgba(17, 17, 19, 0.6)',
    white: '#FFF',

    mainBgr: '#FAFAFA',
    mainBtnBgr: 'linear-gradient(90deg, #3459FE 0%, #6216CF 100%)',
    accentBtnBgr: 'linear-gradient(-90deg, #3459FE 0%, #6216CF 100%)',
    mainChannelBgr:
      'linear-gradient(0deg, #9747FF, #9747FF), linear-gradient(0deg, #D3D3D3, #D3D3D3)',
    inputBgr: '#EFEFEF',
    ownMessageBgr: '#007AFF',
    otherMessageBgr: '#F2F2F7',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '24px',
    xxl: '32px',
  },
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60],
  shadows: {
    main: '0px 4px 12px 0px #00000040',
  },
  border: {
    main: '1px solid #D3D3D3',
    accent: '1px solid #9747FF',
  },
  radii: {
    main: '4px',
    second: '16px',
    ownMessage: '6px 0px 6px 6px',
    otherMessage: '0px 6px 6px 6px',
    full: '50%',
  },
});
