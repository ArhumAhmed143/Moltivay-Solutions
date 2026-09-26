import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import CEO from '../components/CEO';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
        <CEO />
        <Process />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
