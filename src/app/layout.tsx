import { Metadata } from 'next';

import ReduxProvider from '@providers/redux';
import StyledComponentsProvider from '@providers/styledComponent';
import ToastProvider from '@providers/toast';

import '@styles/globals.css';

export const metadata: Metadata = {
  title: 'snapFood',
  description: 'Generated by Mohsen Kermanifar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='fr'>
      <body >
        <StyledComponentsProvider>
          <ReduxProvider>
            {children}
            <ToastProvider />
          </ReduxProvider>
        </StyledComponentsProvider>
      </body>
    </html>
  );
}
