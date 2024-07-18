// src/components/layout/PageLayout.tsx
import { FC, ReactNode } from 'react';
import { Navbar } from './Navbar';

interface Props {
  className?: string;
  children: ReactNode;
}

export const PageLayout: FC<Props> = ({ className, children }) => {
  return (
    <div
      className={`flex flex-col w-screen h-screen overflow-y-hidden items-center
        bg-gradient-to-br from-black-1 to-[#151515] text-primary ${className}`}
    >
      <Navbar />
      {children}
    </div>
  );
};
