'use client';

import type { ReactNode } from 'react';
import Head from 'next/head';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

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
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.body};
    font-size: 16px;
    line-height: 1.5;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>ReturnPoint – Simply Return</title>
        <meta name="description" content="Effortless returns, right from your building. No printer. No box. No hassle." />
        <link rel="icon" href="/icons/box.svg" />
        <link rel="apple-touch-icon" href="/icons/box.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
