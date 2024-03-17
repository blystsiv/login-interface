import PropTypes from 'prop-types';
import { useState } from 'react';
import './Input.css';

const Input = ({ type, placeholder, className }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = isPasswordVisible ? 'text' : 'password';
  const imgSrc = isPasswordVisible ? '/assets/icons/eye-closed.svg' : '/assets/icons/eye.svg';

  return (
    <>
      {type === 'password' ? (
        <div className={`input-container ${className}`}>
          <input className='input' type={inputType} placeholder={placeholder} />
          <img
            className='input-icon'
            src={imgSrc}
            onClick={handlePasswordVisibility}
            alt='eye icon'
          />
        </div>
      ) : (
        <input className={`input ${className}`} type='text' placeholder={placeholder} />
      )}
    </>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password']).isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Input;
