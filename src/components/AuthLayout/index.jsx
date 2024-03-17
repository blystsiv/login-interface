import { Link, Route, Routes } from 'react-router-dom';
import CreateNewPasswordPage from '../../pages/CreateNewPasswordPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';
import LoginPage from '../../pages/LoginPage';
import './AuthLayout.css';

const AuthLayout = () => {
  return (
    <div className='auth-window'>
      <div className='auth-conatiner'>
        <Link to={'/'}>
          <img className='auth-logo' src='/assets/logo.svg' alt='logo' />
        </Link>

        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='create-new' element={<CreateNewPasswordPage />} />
          <Route path='forgot' element={<ForgotPasswordPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthLayout;
