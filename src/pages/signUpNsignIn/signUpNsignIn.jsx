import React from 'react';

import SignIn from '../../components/signIn/signIn';

import './signUpNsignIn.scss';
import SignUp from '../../components/signUp/signUp';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp></SignUp>

  </div>
);

export default SignInAndSignUpPage;