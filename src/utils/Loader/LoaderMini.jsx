import { ThreeDots } from 'react-loader-spinner';

import { themes } from '@/styles';

export const LoaderMini = () => {
  return (
    <ThreeDots
      height="50"
      width="80"
      radius="7"
      color={themes.colors.black}
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: 'center', alignItem: 'center' }}
      wrapperClassName=""
      visible={true}
    />
  );
};
