'use client';

import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.div`
  padding: 4rem 2rem;
  font-family: 'Helvetica Neue', sans-serif;
  background: linear-gradient(to bottom right, #f4f7fa, #e9eef5);
  color: #1e1e1e;
  min-height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  padding-bottom: 3.5rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  color: #0036c1;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  max-width: 620px;
  margin: 0 auto;
  color: #333;
  line-height: 1.6;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
`;

const CTA = styled(Link)`
  padding: 0.85rem 1.8rem;
  background: #0047ff;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(0, 71, 255, 0.2);
  transition: all 0.25s ease;
  &:hover {
    background: #0036c1;
    transform: translateY(-2px);
  }
`;

const Section = styled.section`
  max-width: 840px;
  margin: 0 auto;
  margin-top: 4rem;
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #1e1e1e;
`;

const Step = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.15rem;
  display: flex;
  align-items: start;
  gap: 0.75rem;
  line-height: 1.5;
  &::before {
    content: '✔';
    color: #0047ff;
    font-size: 1.2rem;
    margin-top: 0.2rem;
  }
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Header>
        <Title>ReturnPoint</Title>
        <Subtitle>
          Effortless package returns, right from your building. No printer, no post office, no hassle.
          Trusted by residents and property managers alike.
        </Subtitle>
        <CTAButtons>
          <CTA href="/residents">For Residents</CTA>
          <CTA href="/property">For Properties</CTA>
        </CTAButtons>
      </Header>

      <Section>
        <SectionTitle>How It Works</SectionTitle>
        <Step>Scan the QR code on the ReturnPoint bin to log your package.</Step>
        <Step>Drop your package—no label or printer needed.</Step>
        <Step>We handle the rest and confirm when it's picked up.</Step>
      </Section>
    </Wrapper>
  );
}
