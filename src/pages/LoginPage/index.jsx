import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import Input from '../../components/Input';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <h1 className='heading'>Log in to your account</h1>

      <div className='login-socials'>
        <a className='social-btn' href='#'>
          <img className='social-btn-img' src='/assets/icons/google.svg' alt='google icon' />
          <span className='social-btn-text'>Google</span>
        </a>

        <a className='social-btn' href='#'>
          <img className='social-btn-img' src='/assets/icons/github.svg' alt='github icon' />
          <span className='social-btn-text'>GitHub</span>
        </a>
      </div>

      <div className='delimiter'>
        <p className='delimiter-text'>or</p>
      </div>

      <Input type='text' placeholder='Work email' className='mt-25' />

      <Input type='password' placeholder='Password' className='mt-25' />

      <Link className='login-message' to='/auth/forgot'>
        Forgot your password?
      </Link>

      <Button className='button--primary mt-30'>Log in to Qencode</Button>

      <p className='login-text'>
        Is your company new to Qencode?{' '}
        <Link className='login-link' to='/'>
          Sign up
        </Link>
      </p>
    </>
  );
};

export default LoginPage;
