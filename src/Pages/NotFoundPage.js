import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="Not-found">
      <div className='notfoundpage'>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/newshunt/">
        <button className='btn btn-primary'>Go to Home</button>
      </Link>
    </div>
    </div>
  );
};

export default NotFound;
