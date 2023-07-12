import { Button } from './Button.styled';
import PropTypes from 'prop-types';

export const BtnTemplate = ({
  text,
  gradient,
  hoverBackgroundColor,
  hoverGradient,
  hoverColor,
  ...restProps
}) => {
  return (
    <Button
      gradient={gradient}
      hoverGradient={hoverGradient}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverColor={hoverColor}
      {...restProps}
    >
      {text}
    </Button>
  );
};

BtnTemplate.propTypes = {
  text: PropTypes.string,
  gradient: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  hoverGradient: PropTypes.string,
  hoverColor: PropTypes.string,
};
