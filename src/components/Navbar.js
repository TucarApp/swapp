import { useState } from "react";

const NavbarWithExpandableMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative h-screen">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Navbar */}
      <header className="relative z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Menú con control de estado */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-white text-lg font-medium hover:underline">
              Menú
            </button>
            {/* Menú desplegable */}
            {isMenuOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-6 z-20 w-[350px] md:w-[600px] min-h-[300px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Columna izquierda */}
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Batería</h2>
                    <ul className="space-y-2 text-lg text-gray-600">
                      <li className="hover:text-gray-900">Battery Stations</li>
                      <li className="hover:text-gray-900">App MySilence</li>
                      <li className="hover:text-gray-900">Configurador</li>
                      <li className="hover:text-gray-900">Reserva una prueba</li>
                    </ul>
                    <p className="text-red-600 mt-6 font-semibold">
                      Ahora disponible en renting
                    </p>
                    <ul className="mt-4 space-y-2 text-lg text-gray-600">
                      <li className="hover:text-gray-900">Promociones</li>
                      <li className="hover:text-gray-900">Encuéntranos</li>
                      <li className="hover:text-gray-900">Empresas</li>
                    </ul>
                  </div>
                  {/* Columna derecha */}
                  <div>
                    <img
                      src="/battery_image.jpg"
                      alt="Battery"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Vehículos */}
          <button className="text-white text-lg font-medium hover:underline">
            Vehículos
          </button>

          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            <img src="/Logo_w.svg" alt="Silence" width={150} />
          </div>

          {/* Botones de acción */}
          <div className="flex items-center space-x-6">
            <button className="text-white text-lg font-medium hover:underline">
              Compra ahora
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-opacity-80">
              Reserva una prueba
            </button>
          </div>
        </div>
      </header>

      {/* Texto principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          This Christmas, <br />
          make your move
        </h1>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-opacity-80">
          Reserva una prueba &rarr;
        </button>
      </div>
    </div>
  );
};

export default NavbarWithExpandableMenu;
