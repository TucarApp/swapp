import { useState } from "react";

const NavbarWithExpandableMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
        <div className="container mx-auto px-6 py-4 flex justify-between items-center md:hidden">
          {/* Menú Hamburguesa */}

          <button className="text-white text-lg font-medium">
            <span className="material-icons">Vehículos</span>
          </button>
         

          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            <img src="/hola.jpeg" alt="Silence" width={120} />
          </div>

          {/* Icono de más opciones */}
          <button
            onClick={toggleMobileMenu}
            className="text-white text-lg font-medium"
          >
            <span className="material-icons">menu</span>
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex w-full justify-between items-center">
          <div className="relative">
            <button className="text-white text-lg font-medium hover:underline">
              Menú
            </button>
          </div>
          <button className="text-white text-lg font-medium hover:underline">
            Vehículos
          </button>
          <div className="text-white text-2xl font-bold">
            <img src="/hola.jpeg" alt="Silence" width={150} />
          </div>
          <div className="flex items-center space-x-12">
            <button className="text-white text-lg font-medium hover:underline">
              Compra ahora
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-opacity-80">
              Reserva una prueba
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil con animación */}
      <div
        className={`fixed inset-0 bg-white z-20 p-6 transform ${
          isMobileMenuOpen
            ? "translate-y-0 ease-out duration-500"
            : "-translate-y-full ease-in duration-500"
        }`}
      >
        {/* Botón de cerrar */}
        <div className="flex justify-end">
          <button
            onClick={closeMobileMenu}
            className="text-black text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Contenido del menú */}
        <ul className="space-y-6 text-black text-2xl font-bold mt-4">
          <li>Batería</li>
          <li>Battery Stations</li>
          <li>App MySilence</li>
          <li>Configurador</li>
          <li>Reserva una prueba</li>
        </ul>
        <p className="text-red-600 mt-6 font-semibold">
          Ahora disponible en renting
        </p>
        <ul className="mt-4 space-y-2 text-lg text-gray-600">
          <li>Promociones</li>
          <li>Encuéntranos</li>
          <li>Empresas</li>
        </ul>
        <div className="mt-8 flex justify-between items-center">
          <button className="text-black font-semibold text-lg">Compra ahora</button>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-opacity-80">
            Reserva una prueba
          </button>
        </div>
      </div>

      {/* Texto principal */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 pt-14 text-white text-left">
        <h1 className="text-4xl md:text-8xl font-bold leading-tight">
          Make your <br /> move
        </h1>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-opacity-80">
          Reserva una prueba &rarr;
        </button>
      </div>
    </div>
  );
};

export default NavbarWithExpandableMenu;
