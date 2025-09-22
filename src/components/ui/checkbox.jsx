import React from 'react';
import { Check } from 'lucide-react'; // We need the Check icon

// A helper to combine class names
import { twMerge } from 'tailwind-merge';

const Checkbox = React.forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => {
  return (
    // We use a button as the visible, stylable element
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={twMerge(
        'flex h-5 w-5 items-center justify-center rounded-sm border border-gray-500 bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800',
        checked && 'border-green-600 bg-green-600 text-white', // Styles when checked
        className
      )}
      {...props}
    >
      {/* The actual input is hidden but handles form state */}
      <input
        type="checkbox"
        ref={ref}
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="sr-only" // This class makes it invisible but accessible
      />
      {/* We show our own Check icon when the state is checked */}
      {checked && <Check className="h-4 w-4 text-white" />}
    </button>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };