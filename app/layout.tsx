'use client';

import { ReactNode } from 'react';
import Head from 'next/head';
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
  MoonIcon,
  SunIcon,
  extendTheme,
} from '@chakra-ui/react';

// Define brand colors
const colors = {
  brand: {
    500: '#0047FF',
    50: '#e5f0ff',
    100: '#b3c7ff',
    200: '#80a0ff',
    300: '#4d79ff',
    400: '#1a52ff',
    600: '#0039cc',
    700: '#002e99',
    800: '#002266',
    900: '#001633',
  },
  accent: '#FF9900',
};

// Create the theme
const theme = extendTheme({ colors });

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bg}
      px={8}
      py={4}
      borderBottom="1px"
      borderColor={borderColor}
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex align="center" maxW="1200px" mx="auto">
        <Heading size="lg" color="brand.500" fontWeight="extrabold" cursor="pointer">
          ReturnPoint
        </Heading>
        <Spacer />
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          size="md"
        />
      </Flex>
    </Box>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>ReturnPoint – Simply Return</title>
        <meta
          name="description"
          content="Effortless eCommerce returns from your building — no printer, no box, no hassle."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ChakraProvider theme={theme}>
          <Header />
          <Box maxW="1200px" mx="auto" px={4} py={8} minH="calc(100vh - 80px)">
            {children}
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
