import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;