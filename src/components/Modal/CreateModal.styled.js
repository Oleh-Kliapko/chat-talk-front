import styled from '@emotion/styled';
// import  Plus   from '../../images/svg/Plus';

import { themes } from '../../styles/themes';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: absolute;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  max-width: 95%;
  padding: 48px 18px 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${themes.colors.white};
`;

// export const CloseModal = styled(Plus)`
//   position: absolute;
//   top: 19px;
//   right: 19px;
//   width: 24px;
//   height: 24px;
//   transition: all 250ms;
//   cursor: pointer;
//   stroke: ${themes.colors.white};

//   &:hover,
//   &:focus {
//     stroke: ${themes.colors.white};

//     transform: rotate(180deg);
//   }
// `;
