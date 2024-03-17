import { Button } from '../../components/Button';
import Input from '../../components/Input';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  return (
    <>
      <h1 className='heading'>Forgot Password?</h1>

      <Input type='text' placeholder='Enter your email' />

      <Button className='button--primary mt-25'>Send</Button>
      <Button className='button--secondary mt-20'>Cancel</Button>
    </>
  );
};

export default ForgotPasswordPage;
