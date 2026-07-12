'use client';
export default function PageWrapper({ children, className = '', style = {} }) {
  return (
    <main className={className} style={style}>
      {children}
    </main>
  );
}
