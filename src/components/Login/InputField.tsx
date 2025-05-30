import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string; 
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  className,
  type = 'text',
  ...props
}) => {
  return (
    <div className={cn('grid w-full items-center gap-1.5', className)}>
      <Label htmlFor={id} className="text-sm font-medium text-card-foreground">
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        className="text-card-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
        {...props}
      />
    </div>
  );
};

export default InputField;