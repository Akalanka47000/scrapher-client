import { HTMLProps } from 'react';
import { cn } from '@/utils';
import { Footer } from './footer';

export function Layout({ className, children, ...props }: HTMLProps<HTMLElement>) {
  return (
    <>
      <main
        className={cn(
          'w-full overflow-x-hidden min-h-[90svh] flex flex-col justify-center items-center font-inter',
          className
        )}
        {...props}>
        {children}
      </main>
      <Footer />
    </>
  );
}
