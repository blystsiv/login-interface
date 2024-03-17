import { Route, Routes } from 'react-router-dom';
import CreateNewPasswordPage from './pages/CreateNewPasswordPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <>
      <div className='auth-window'>
        <div className='auth-conatiner'>
          <img className='auth-logo' src='/assets/logo.svg' alt='logo' />
          
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/create-new' element={<CreateNewPasswordPage />} />
            <Route path='/forgot' element={<ForgotPasswordPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
