const ForgotPasswordPage = () => {
  return (
    <>
      <h1 className='auth-heading'>Forgot Password?</h1>

      <input className='input' type='text' placeholder='Enter your email' />

      <button className='button mt-25 button--primary'>Send</button>
      <button className='button mt-20 button--secondary'>Cancel</button>
    </>
  );
};

export default ForgotPasswordPage;
