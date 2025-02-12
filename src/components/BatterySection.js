import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const BatteryStationsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.5, 
  });

  const [stations, setStations] = useState(0);
  const [cities, setCities] = useState(0);

  useEffect(() => {
    if (inView) {
      const animateCount = (start, end, setFunc) => {
        let current = start;
        const increment = end / 100; 
        const duration = 2500; 
        const interval = duration / 100;

        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            clearInterval(timer);
            setFunc(end);
          } else {
            setFunc(Math.ceil(current));
          }
        }, interval);
      };

      animateCount(0, 130, setStations); 
      animateCount(0, 45, setCities);
    }
  }, [inView]);

  return (
    <section className="bg-gray-100 py-16 ">
      <div className="container mx-auto flex flex-col justify-center items-center   md:flex-start md:flex-row">
        {/* Contenido de texto */}
        <div className="md:w-1/2 mx-40 px-6 text-center md:text-left" ref={ref}>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Battery Stations
          </h2>
          <p className="text-2xl text-gray-700 mb-8">
            Cuando y donde las necesites
          </p>
          <a
            href="#"
            className="text-lg text-black font-semibold hover:underline"
          >
            Encuentra la más cercana &rarr;
          </a>

          {/* Estadísticas */}
          <div className="mt-8 flex justify-center md:justify-start space-x-12">
            <div className="text-center ">
              <p className="text-4xl font-bold text-black text-center md:text-left">{stations}</p>
              <p className="text-lg text-gray-700">Estaciones</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-black text-center md:text-left">{cities}</p>
              <p className="text-lg text-gray-700">Ciudades</p>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div
          className="md:w-1/2 px-6 flex items-center justify-center relative mt-5"
        >
          <div className="relative mt-6">
            {/* Contenedor del móvil */}
            <div className="relative w-72 bg-white rounded-3xl shadow-md overflow-hidden">
              <img src="cositas.png" alt="Battery Stations" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatteryStationsSection;
