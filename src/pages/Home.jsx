import React from 'react';
import DigitalSolutions from '../components/DigitalSolutions';
import Projectline from '../components/Projectline';
import ClientFeedback from '../components/ClientFeedback';
import DigitalAgencyHero from '../components/DigitalAgencyHero';
import CalendlyWidget from '../components/CalendlyWidget';

export default function Home() {
  return (
    <div className="home-page">
      <DigitalAgencyHero />
      <DigitalSolutions />
      <Projectline />
      <ClientFeedback />

      <CalendlyWidget /> 
    </div>
  );
}
