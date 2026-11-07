import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Moltivay Solutions | Corporate Tech & Software Agency',
  description:
    'Full-stack software engineering, SQA quality assurance, private AI model training, and dedicated virtual assistance for high-growth enterprises.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
