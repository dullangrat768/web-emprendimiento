import { useState, useEffect } from 'react';

const imagenesFondo = [
  '/mantenimiento1.webp', 
  '/mantenimiento2.webp',
];

function Hero() {
  const [indiceImagen, setIndiceImagen] = useState(0);

  // Efecto para cambiar la imagen automáticamente
  useEffect(() => {
  
    const intervalo = setInterval(() => {
      setIndiceImagen((prevIndice) => 
        prevIndice === imagenesFondo.length - 1 ? 0 : prevIndice + 1
      );
    }, 5000); //velocidad 5000 = 5 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section 
      id="inicio"
      className="relative text-white py-32 md:py-48 px-6 text-center bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
      style={{ 
        backgroundImage: `url(${imagenesFondo[indiceImagen]})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/40 border border-blue-700/50 rounded-full">
           Rendimiento Extremo
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-none">
          Soporte Técnico de <span className="text-blue-400">Alto Rendimiento</span>
        </h1>
        
        <p className="text-slate-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Especialistas en optimización de Windows (incluyendo setups WinterOS), mantenimiento físico profundo y diagnósticos de hardware para PC Gaming y estaciones de trabajo.
        </p>
        
      </div>
    </section>
  );
}

export default Hero;