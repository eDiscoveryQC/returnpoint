'use client';

import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';

const features = [
  {
    title: 'No Printer or Labels Needed',
    description:
      'Return your online orders effortlessly without printing anything or finding shipping labels.',
  },
  {
    title: 'Secure Lockers in Your Building',
    description:
      'Drop off your returns at secure, conveniently located lockers in your apartment or office.',
  },
  {
    title: 'We Deliver to Major Carriers',
    description:
      'Your returns are handed off to trusted carriers like UPS, FedEx, and Amazon for fast processing.',
  },
  {
    title: 'Simple Scheduling & Tracking',
    description:
      'Easily schedule pickups and track your return status from drop-off to completion.',
  },
];

export default function LandingPage() {
  return (
    <Box as="main" pt={{ base: '6rem', md: '8rem' }} px={{ base: 4, md: 8 }}>
      {/* Hero Section */}
      <Stack
        maxW="700px"
        mx="auto"
        textAlign="center"
        spacing={6}
        mb={16}
      >
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '5xl' }}
          fontWeight="extrabold"
          color="brand.500"
          lineHeight="1.1"
        >
          Effortless Returns. No Printer. No Box. No Hassle.
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
          ReturnPoint lets you drop off your online order returns at secure lockers right in your building. We handle the rest — making returns seamless and stress-free.
        </Text>
        <Button
          colorScheme="orange"
          size="lg"
          maxW="200px"
          mx="auto"
          _hover={{ bg: 'brand.500', color: 'white' }}
        >
          Get Started
        </Button>
      </Stack>

      {/* Features Grid */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={12}
        maxW="900px"
        mx="auto"
      >
        {features.map(({ title, description }) => (
          <Box
            key={title}
            p={6}
            bg="brand.50"
            borderRadius="md"
            boxShadow="md"
            _hover={{ boxShadow: 'xl' }}
            transition="box-shadow 0.3s ease"
          >
            <Heading fontSize="xl" mb={2} color="brand.600">
              {title}
            </Heading>
            <Text color="gray.700">{description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
