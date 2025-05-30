import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

interface LoginButtonProps extends ButtonProps {}

const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  className,
  type = "submit",
  ...props
}) => {
  return (
    <Button
      type={type}
      className={cn(
        'w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default LoginButton;