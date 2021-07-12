/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import Loader from '../Loader';
import styles from './button.module.scss';

// main button
// eslint-disable-next-line prettier/prettier
const Button = ({
  variant, className, isDisabled, children, isLoading, onClick, ...rest
}) => (
  <button
    type="button"
    className={`${styles[variant]} ${className}`}
    onClick={isDisabled || isLoading ? () => {} : onClick}
    // eslint-disable-next-line prettier/prettier
    {...rest}
  >
    {isLoading && <Loader />}
    {children}
  </button>
);

Button.propTypes = {
  variant: PropTypes.oneOf([
    'portHomeButton',
    'portResume',
    'portSocialButton',
    'disable',
    'portNavButton',
    'portServiceButton',
  ]),
};

Button.defaultProps = {
  variant: 'portHomeButton',
};

export default Button;
