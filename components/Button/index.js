/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import styles from './button.module.scss';

// main button
// eslint-disable-next-line prettier/prettier
const Button = ({ variant, className, isDisabled, children, isLoading, onClick, ...rest }) => (
  <a
    role="button"
    type="button"
    className={`${styles[variant]} ${className}`}
    // eslint-disable-next-line prettier/prettier
    {...rest}>
    {children}
  </a>
);

Button.propTypes = {
  variant: PropTypes.oneOf([
    'portHomeButton',
    'portResume',
    'portSocialButton',
    'disable',
    'portNavButton',
    'portServiceButton',
    'technoBtn',
  ]),
};

Button.defaultProps = {
  variant: 'portHomeButton',
};

export default Button;
