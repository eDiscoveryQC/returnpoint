'use client';

import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  padding: 4rem 2rem;
  background: #f4f6f8;
  color: #1a1a1a;
  font-family: 'Helvetica Neue', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  text-align: center;
  max-width: 720px;
  animation: ${fadeIn} 0.6s ease forwards;
`;

const Title = styled.h1`
  font-size: 3.25rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #4a4a4a;
  line-height: 1.6;
`;

const CTAButtons = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const CTA = styled(Link)`
  background: #0052cc;
  color: #fff;
  padding: 0.9rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease;

  &:hover {
    background: #003ea6;
  }
`;

const Section = styled.section`
  margin-top: 4rem;
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  max-width: 800px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  animation: ${fadeIn} 0.6s ease 0.2s forwards;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const Step = styled.div`
  font-size: 1.1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eaeaea;

  &:last-child {
    border-bottom: none;
  }
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Header>
        <Title>ReturnPoint</Title>
        <Subtitle>
          Drop off Amazon, FedEx, UPS, and USPS returns right from your building. No printer. No post office. Just scan and drop.
        </Subtitle>
        <CTAButtons>
          <CTA href="/residents">For Residents</CTA>
          <CTA href="/property">For Properties</CTA>
        </CTAButtons>
      </Header>

      <Section>
        <SectionTitle>How It Works</SectionTitle>
        <Step>📲 Scan the QR code on the bin to register your return.</Step>
        <Step>📦 Drop your package — no printer or label required.</Step>
        <Step>✅ We handle the rest and confirm it&apos;s on its way.</Step>
      </Section>
    </Wrapper>
  );
}
