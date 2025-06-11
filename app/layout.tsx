'use client';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import type { ReactNode } from 'react';
import Head from 'next/head';

const theme = {
  colors: {
    primary: '#0047FF', // Premium blue like FedEx/Amazon
    background: '#f4f6f8',
    text: '#1a1a1a',
    accent: '#FF9900', // Amazon-style orange accent
  },
  fonts: {
    body: "'Helvetica Neue', 'Segoe UI', 'Roboto', sans-serif",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.body};
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>ReturnPoint – Effortless Returns</title>
        <meta name="description" content="Effortless returns from your building. No printer. No post office. No hassle." />
        <meta name="theme-color" content="#0047FF" />
        <link rel="icon" href="/icons/box.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/box.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
