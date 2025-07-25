import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Cabins from './components/Cabins';
import Services from './components/Services';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Cabins />
      <Services />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;