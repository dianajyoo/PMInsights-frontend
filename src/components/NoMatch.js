import React from 'react';
import { NavLink } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className='no-match'>
      <span id='break'>took a 404 break...</span>
      <span id='go-back'>
        meanwhile, you can go back{' '}
        <NavLink to='/dashboard' className='back'>
          home
        </NavLink>
      </span>
    </div>
  );
};

export default NoMatch;