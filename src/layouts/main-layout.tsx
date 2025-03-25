import { PropsWithChildren } from 'react';
import Header from '../features/header';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className="container w-full mx-auto min-h-screen">
      <Header />
      {children}
    </main>
  );
}
