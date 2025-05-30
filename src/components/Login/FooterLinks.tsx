import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FooterLinksProps {
  onSignUpClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const FooterLinks: React.FC<FooterLinksProps> = ({
  onSignUpClick,
  className,
}) => {
  return (
    <div className={cn('text-center text-sm', className)}>
      <span className="text-muted-foreground">or, </span>
      <Button
        variant="link"
        onClick={onSignUpClick}
        className="p-0 h-auto font-normal text-muted-foreground hover:text-primary hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        sign up
      </Button>
    </div>
  );
};

export default FooterLinks;