import type { Metadata } from 'next';
import StyledComponentsRegistry from '../lib/registry';
import { Poppins } from 'next/font/google';
import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ITV Basket Demo App',
  description: 'Simple ITV Basket Demo',
};

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className={poppins.className}>
          <StyledComponentsRegistry>
            <Providers>
              <Header />
              {children}
              <Footer />
            </Providers>
          </StyledComponentsRegistry>
        </div>
      </body>
    </html>
  );
}
