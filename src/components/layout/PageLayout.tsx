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
      className={`flex flex-col w-screen h-screen overflow-auto items-center
        bg-gradient-to-br from-black-1 to-black-2 ${className}`}
    >
      <Navbar />
      <div className="fixed top-20 bottom-0 left-0 right-0 overflow-y-auto">
        <div className="flex flex-col items-center py-2 px-10">{children}</div>
      </div>
    </div>
  );
};
