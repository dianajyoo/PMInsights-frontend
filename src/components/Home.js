import React from 'react';
import LoginButton from './LoginButton';
import '../stylesheets/Home.css';

const Home = () => {
  return (
    <div className='landingPage'>
      <div className='titleWrapper'>
        <span className='title'>wellness</span>
      </div>
      <LoginButton />
    </div>
  );
};

export default Home;
