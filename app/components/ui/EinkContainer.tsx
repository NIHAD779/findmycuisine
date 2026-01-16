import { ReactNode } from 'react';

interface EinkContainerProps {
  children: ReactNode;
}

export function EinkContainer({ children }: EinkContainerProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div 
        className="w-full max-w-2xl rounded-sm p-12 md:p-16"
        style={{
          backgroundColor: 'var(--eink-paper)',
          boxShadow: '0 2px 8px var(--eink-shadow), inset 0 0 0 1px var(--eink-border)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
