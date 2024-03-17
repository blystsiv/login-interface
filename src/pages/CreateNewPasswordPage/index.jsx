import { Button } from '../../components/Button';
import Input from '../../components/Input';
import './CreateNewPasswordPage.css';

const CreateNewPasswordPage = () => {
  return (
    <>
      <h1 className='heading'>Create new Password?</h1>

      <p className='help-message'>Password</p>
      <Input type='password' placeholder='Password' />

      <p className='help-message mt-25'>Confirm Password</p>
      <Input type='password' placeholder='Password' />

      <Button className='button--primary mt-30'>Reset Password</Button>
    </>
  );
};

export default CreateNewPasswordPage;
