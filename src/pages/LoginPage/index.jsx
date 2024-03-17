import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <h1 className='auth-heading'>Log in to your account</h1>

      <div className='auth-socials'>
        <a className='auth-social-btn' href='#'>
          <img className='auth-social-img' src='/assets/icons/google.svg' alt='google icon' />
          <span className='auth-social-text'>Google</span>
        </a>

        <a className='auth-social-btn' href='#'>
          <img className='auth-social-img' src='/assets/icons/github.svg' alt='github icon' />
          <span className='auth-social-text'>GitHub</span>
        </a>
      </div>

      <div className='auth-delimiter'>
        <p className='auth-delimiter-text'>or</p>
      </div>

      <input className='input' type='text' placeholder='Work email' />

      <div className='input-conatiner'>
        <input className='input mt-25' type='password' placeholder='Password' />
        <img className='input-icon' src='/assets/icons/eye.svg' alt='eye icon' />
      </div>

      <Link className='auth-message' to='/forgot'>
        Forgot your password?
      </Link>

      <button className='button mt-30 button--primary'>Log in to Qencode</button>

      <p className='auth-text'>
        Is your company new to Qencode?{' '}
        <a className='auth-link' href='#'>
          Sign up
        </a>
      </p>
    </>
  );
};

export default LoginPage;
