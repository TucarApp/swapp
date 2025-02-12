import { useState, useEffect } from 'react';
import Features from './../components/Features/Features'
import Carrusel from './../components/Features/Carrusel'



const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-100 to-white">
      <div className={`w-full max-w-7xl mx-auto px-4 py-20 md:py-32 grid md:grid-cols-2 gap-8 items-center ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
            Nuevo modelo
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            S01
            <span className="block text-2xl md:text-3xl text-gray-600 mt-2">Scooter Eléctrica</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            La moto eléctrica más potente y eficiente. Perfecta para la ciudad y respetuosa con el medio ambiente.
          </p>
          <div className="flex flex-wrap gap-4">
            <button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Reserva ahora
            </button>
            <button variant="secondary" size="lg">
              Más información
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div>
              <p className="text-3xl font-bold text-gray-900">125 km</p>
              <p className="text-sm text-gray-600">Autonomía</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">95 km/h</p>
              <p className="text-sm text-gray-600">Velocidad máx</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">0%</p>
              <p className="text-sm text-gray-600">Emisiones</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img 
            src="/vs3/3.webp" 
            alt="Scooter S01+" 
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
    <Features />
    <Carrusel />
    </div>
  );
};

export default Hero;