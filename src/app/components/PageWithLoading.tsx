'use client';

import { useState } from 'react';
import LoadingScreen from './LoadingScreen';

interface PageWithLoadingProps {
  children: React.ReactNode;
  showLoading?: boolean;
}

const PageWithLoading = ({ children, showLoading = true }: PageWithLoadingProps) => {
  const [isLoading, setIsLoading] = useState(true); // Siempre inicia en true

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {children}
      </div>
    </>
  );
};

export default PageWithLoading;
