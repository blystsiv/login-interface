const CreateNewPasswordPage = () => {
  return (
    <>
      <h1 className='auth-heading'>Create new Password?</h1>

      <p className='auth-help-message'>Password</p>
      <div className='input-conatiner'>
        <input className='input' type='password' placeholder='Password' />
        <img className='input-icon' src='/assets/icons/eye.svg' alt='eye icon' />
      </div>

      <p className='auth-help-message mt-25'>Confirm Password</p>
      <div className='input-conatiner'>
        <input className='input' type='password' placeholder='Password' />
        <img className='input-icon' src='/assets/icons/eye.svg' alt='eye icon' />
      </div>

      <button className='button mt-30 button--primary'>Reset Password</button>
    </>
  );
};

export default CreateNewPasswordPage;
