import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='home-container'>
      <h1 className='home-heading'>🚀 Welcome to My Awesome App! 🚀</h1>

      <div className='home-navigation'>
        <h2 className='home-subheading'>Explore the Features:</h2>
        <ul>
          <li>
            <span className='home-prefix'>🔐 Login:</span> <Link to='/auth/login'>Login</Link>
          </li>
          <li>
            <span className='home-prefix'>🔑 Create New Password:</span>{' '}
            <Link to='/auth/create-new'>Create New Password</Link>
          </li>
          <li>
            <span className='home-prefix'>🔍 Forgot Password:</span>{' '}
            <Link to='/auth/forgot'>Forgot Password</Link>
          </li>
        </ul>
      </div>

      <div className='home-info'>
        <p>Get started with our authentication features!</p>
        <p>Click on any of the links above to explore further.</p>
      </div>
    </div>
  );
};

export default HomePage;
