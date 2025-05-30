import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'grid place-items-center h-screen bg-background',
        className
      )}
    >
      {/* The children will typically be a page's content, like CenteredLoginCard which contains LoginForm */}
      {children}
    </div>
  );
};

export default MainAppLayout;
