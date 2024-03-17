import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  return (
    <>
      <h1 className='heading'>Forgot Password?</h1>

      <input className='input' type='text' placeholder='Enter your email' />

      <button className='button button--primary mt-25'>Send</button>
      <button className='button button--secondary mt-20'>Cancel</button>
    </>
  );
};

export default ForgotPasswordPage;
