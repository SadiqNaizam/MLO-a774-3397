import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginForm from '../components/Login/LoginForm';

/**
 * LoginPage serves as the main page for user authentication.
 * It utilizes MainAppLayout for overall page structure and centering,
 * and LoginForm for the actual login interface.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        LoginForm is already styled as a card and contains all 
        necessary input fields, buttons, and links for the login process.
        MainAppLayout ensures this form is centered on the page with the correct background.
      */}
      <LoginForm />
    </MainAppLayout>
  );
};

export default LoginPage;
