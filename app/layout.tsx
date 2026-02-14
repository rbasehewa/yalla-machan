// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yalla Machan! - Fresh Sri Lankan Seafood in Perth',
  description: 'Premium headless sprats and Sri Lankan seafood delivered to your door. Free delivery within 20km of Perth CBD.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}