interface EinkTitleProps {
  children: string;
}

export function EinkTitle({ children }: EinkTitleProps) {
  return (
    <h1 
      className="text-center mb-8 font-serif tracking-wide"
      style={{
        color: 'var(--eink-blue)',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 400,
        letterSpacing: '0.05em',
        lineHeight: 1.2,
      }}
    >
      {children}
    </h1>
  );
}
