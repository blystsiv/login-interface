import cn from 'classnames';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ children, className, onClick, type }) => {
  const buttonClass = cn('button', className);

  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {

};