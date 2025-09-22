import React from 'react';

export const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  return (
    <button
      className={className}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";