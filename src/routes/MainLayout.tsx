import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsAndConditions from '../components/TermsAndConditions';

export default function MainLayout() {
  return (
    <>
      <Hero />
      <Products />
      <Features />
      <PrivacyPolicy />
      <TermsAndConditions />
      <HowItWorks />
    </>
  );
}