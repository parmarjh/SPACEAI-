import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProcessSteps from '../components/ProcessSteps';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <ProcessSteps />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
};

export default Home;