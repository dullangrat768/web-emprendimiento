import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import IntermedioCTA from './components/intermedioCTA';
import Testimonios from './components/Testimonios';
import FAQ from './components/FAQ';
import PreFooter from './components/PreFooter';
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div id="Inicio">
        <Hero />
        </div>
        <div id="servicios">
          <Servicios />
          <IntermedioCTA/>
        </div>
        <div id="testimonios">
        <Testimonios/>
        </div>
        <div id="FAQ">
        <FAQ/>
        </div>
        <Contacto />
      </main>
      <PreFooter/>
      <footer className="bg-slate-900 text-gray-400 py-6 text-center border-t border-slate-800">
        <p>© 2026 Mantenimiento J&S</p>
      </footer>
    </div>
  );
}

export default App;