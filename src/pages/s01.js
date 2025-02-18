import { useState, useEffect } from "react";
import Features from "./../components/Features/Features";
import Carrusel from "./../components/Features/Carrusel";

import Tabla from './../components/Features/Tabla';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const motoData = {
    modelo: "Vmoto VS1",
    potencia: "7.0 kW | 8.0 kW",
    velocidadMaxima: "105 km/h",
    autonomia: "130 km",
    emisiones: "0%",
  };

  return (
    <div>
      {/* <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-100 to-white">
        <div className={`w-full max-w-7xl mx-auto px-4 py-20 md:py-32 grid md:grid-cols-2 gap-8 items-center ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              {motoData.modelo}
              <span className="block text-2xl md:text-3xl text-gray-600 mt-2">Scooter Eléctrica</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              La moto eléctrica más potente y eficiente. Perfecta para la ciudad y respetuosa con el medio ambiente.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Reserva ahora
              </button>
              <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Más información
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-lg text-gray-500">Potencia</p>
                <p className="text-base font-bold text-gray-900">{motoData.potencia}</p>
              </div>
              <div>
                <p className="text-lg text-gray-500">Velocidad máx</p>
                <p className="text-base font-bold text-gray-900">{motoData.velocidadMaxima}</p>
              </div>
              <div>
                <p className="text-lg text-gray-500">Autonomía</p>
                <p className="text-base font-bold text-gray-900">{motoData.autonomia}</p>
              </div>
             
            </div>
          </div>
          <div className="relative">
            <img 
              src="/cp.jpg" 
              alt="Scooter Vmoto CPX" 
              
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section> */}
      <div className="relative flex items-center justify-center h-screen bg-gradient-to-b from-gray-200 to-white">
        {/* Texto detrás */}
        <h1 className="absolute top-10 text-[10rem] font-bold text-gray-300 opacity-50 z-0">
          VS1
        </h1>

        {/* Imagen al frente */}
        <img
          src="/VS1/vs1hd.png" // Reemplázalo con tu imagen
          alt="Moto vs1"
          className="relative z-10 w-[40rem]"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 py-12 bg-gray-100">
        {/* Imagen */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/VS1/vs1costado.png" // Reemplaza con la imagen correcta
            alt="Moto"
            className="max-w-sm md:max-w-md"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            Control y comodidad
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-2">
            Comfort & Performance
          </p>

          {/* Datos técnicos */}
          <div className="mt-6 text-gray-800 text-lg">
            <p className="font-semibold">Vmoto CPX</p>

            <p className="mt-2">
              <span className="font-semibold">7.0 kW | 8.0 kW</span>
              <br />
              <span className="text-gray-600">
                Potencia nominal | Potencia máxima
              </span>
            </p>

            <p className="mt-4">
              <span className="font-semibold">105 km/h</span>
              <br />
              <span className="text-gray-600">Velocidad máxima</span>
            </p>

            <p className="mt-4">
              <span className="font-semibold">130 km</span>
              <br />
              <span className="text-gray-600">Autonomía WMTC Etapa 3</span>
            </p>
          </div>
        </div>
      </div>

     
        <Features />
        <Carrusel />
        <Tabla />
      
    </div>
  );
};

export default Hero;
