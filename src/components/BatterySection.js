const BatteryStationsSection = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Contenido de texto */}
          <div className="md:w-1/2 px-6 text-left">
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
            <div className="mt-8 flex space-x-12">
              <div className="text-center">
                <p className="text-4xl font-bold text-black">130</p>
                <p className="text-lg text-gray-700">Estaciones</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-black">45</p>
                <p className="text-lg text-gray-700">Ciudades</p>
              </div>
            </div>
          </div>
  
          {/* Imagen */}
          <div className="md:w-1/2 px-6 flex items-center justify-center relative">
            <div className="relative">
              {/* Contenedor del móvil */}
              <div className="relative w-72  bg-white rounded-3xl shadow-md overflow-hidden">
                <img src="cositas.png" />
              </div>
              {/* Imagen de la mujer */}
              <img
                src="/images/battery_station.jpg"
                alt="Battery Station"
                className="ml-4 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BatteryStationsSection;
  