import PropTypes from "prop-types";
import classNames from "classnames";
import Loader from "../Loader";
import styles from './button.module.scss';

// main button
const Button = ({
  variant,
  className,
  isDisabled,
  children,
  isLoading,
  onClick,
  ...rest
}) => (
  <button
    type="button"
    className={classNames(!isDisabled && !isLoading && styles[variant], {
      [styles.disable]: isDisabled || isLoading,
      [className]: !!className,
    })}
    onClick={isDisabled || isLoading ? () => {} : onClick}
    {...rest}
  >
    {isLoading && <Loader />}
    {children}
  </button>
);

Button.propTypes = {
  variant: PropTypes.oneOf([
    "portHomeButton",
    "portResume",
    "portSocialButton",
    "disable",
    "portNavButton",
    "portServiceButton",
  ]),
};

Button.defaultProps = {
  variant: "portHomeButton",
};

export default Button;
