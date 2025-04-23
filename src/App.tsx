import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AppShowcase from './components/AppShowcase';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <AppShowcase />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;