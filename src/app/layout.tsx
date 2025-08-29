import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Myxellia',
  description:
    'Myxellia is an ever-evolving cloud based infrastructure of interconnected apps and services, built to make real estate work better for alls',
  keywords: ['Cloud-Based Infrastructure', 'Real Estate'],
  icons: {
    icon: '/src/app/favicon.ico',
  },
  openGraph: {
    title: 'Myxellia',
    description:
      'Myxelia is the #1 no-code platform-Empowering property developers to create applications instantly, without writing a single line of code',
    url: 'https://example.com',
    siteName: 'Myxellia',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
