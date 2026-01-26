'use client';

import { cn } from '@/lib/utils';

interface ExampleProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Example Component
 * 
 * This is a template component. Replace with your actual components.
 */
export function Example({ className, children }: ExampleProps) {
  return (
    <div className={cn('p-4 rounded-lg', className)}>
      {children}
    </div>
  );
}
