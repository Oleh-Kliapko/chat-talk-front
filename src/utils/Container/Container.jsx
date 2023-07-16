import PropTypes from 'prop-types';

import { Wrapper } from './Container.styled';

export const Container = ({ from, children }) => {
  return <Wrapper from={from}>{children}</Wrapper>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  from: PropTypes.string,
};
