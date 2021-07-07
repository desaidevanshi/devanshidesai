import PropTypes from 'prop-types';
import styles from './card.module.scss';

// eslint-disable-next-line prettier/prettier
const Card = ({
  children, variant, className, ...props
}) => (
  <div className={`${styles[variant]} ${className}`} {...props}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['cardPort', 'hoverPort', 'cardBlog']),
};

Card.defaultProps = {
  className: '',
  variant: 'cardPort',
};

export default Card;
