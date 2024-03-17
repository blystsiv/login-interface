import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<NotFoundPage />} />
        <Route path='/auth/*' element={<AuthLayout />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
