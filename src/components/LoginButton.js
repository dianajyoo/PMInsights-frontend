import React from 'react';
import '../stylesheets/LoginButton.css';

const LoginButton = () => {
  return (
    <a href='https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22DFCL&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fdashboard&scope=heartrate%20location%20profile%20sleep%20weight&expires_in=604800&prompt=login'>
      <button className='loginButton'>LOG INTO FITBIT</button>
    </a>
  );
};

export default LoginButton;