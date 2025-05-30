import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import InputField from './InputField';
import LoginButton from './LoginButton';
import FooterLinks from './FooterLinks';

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUsernameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      console.log('Login attempt with:', { username, password });
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(false);
      // Example: Handle login success/failure here
    },
    [username, password]
  );

  const handleSignUp = useCallback(() => {
    console.log('Navigate to Sign Up page');
    // Implement navigation or state change for sign up
  }, []);
  
  return (
    <div
      className={cn(
        'flex flex-col p-6 w-[300px] bg-card rounded-md shadow-lg text-card-foreground',
        className
      )}
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-card-foreground">
        Log in
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField
          id="username"
          label="Username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          disabled={isLoading}
          autoComplete="username"
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          disabled={isLoading}
          autoComplete="current-password"
        />
        <LoginButton type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Log in'}
        </LoginButton>
      </form>
      <FooterLinks onSignUpClick={handleSignUp} className="mt-4" />
    </div>
  );
};

export default LoginForm;