import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className='nf-container'>
      <h1 className='nf-heading'>404 - Page Not Found</h1>

      <p className='nf-message'>
        Oops! It looks like you have stumbled upon a page that does not exist.
      </p>

      <Link to='/' className='nf-link'>
        Go Back to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
