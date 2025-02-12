import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Logo2 from "../Logos/Logo2";

const NavbarWithExpandableMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVehiclesMenuOpen, setIsVehiclesMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  const [selectedVehicle, setSelectedVehicle] = useState("S01+");

  const [activeImage, setActiveImage] = useState("/silence/bateria.webp");

  const menuImages = {
    Batería: "/silence/bateria.webp",
    "Battery Stations": "/silence/batterystations.webp",
    "App MySilence": "/silence/appsilence.webp",
    Configurador: "/silence/configurador.webp",
    "Reserva una prueba": "/silence/5.webp",
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsVehiclesMenuOpen(false);
  };

  const toggleVehiclesMenu = () => {
    setIsVehiclesMenuOpen(!isVehiclesMenuOpen);
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsVehiclesMenuOpen(false);
  };

  const [logoSrc, setLogoSrc] = useState("/Logo_w.svg"); // Logo por defecto

  const vehicles = [
    { id: "S01+", name: "S01+", img: "/vs3/1.webp" },
    { id: "S01", name: "S01", img: "/vs3/2.webp" },
    { id: "S02", name: "S02", img: "/vs3/3.webp" },
    { id: "S04", name: "S04", img: "/vs3/1.webp" },
  ];

  useEffect(() => {
    // Aquí puedes definir cuándo cambiar el logo
    if (window.location.pathname.includes("swapp")) {
      setLogoSrc("/Logo_swapp.svg"); // Si la URL contiene "swapp", cambia el logo
    } else {
      setLogoSrc("/Logo_w.svg"); // Si no, usa el logo normal
    }
  }, []);

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
          {/* Botón Vehículos */}
          <button
            onClick={toggleVehiclesMenu}
            className="text-[#ffffff] text-lg font-medium flex items-center space-x-2"
          >
            <span>Vehículos</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                isVehiclesMenuOpen ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            <img src="/Logo_w.svg" alt="Silence" width={120} />
          </div>

          {/* Icono de más opciones */}
          <button
            onClick={toggleMobileMenu}
            className="text-[#ffffff] text-lg font-medium flex items-center space-x-2"
          >
            <span>Menu</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex w-full items-center justify-between px-24 relative pt-10">
          <div className="flex items-center gap-x-6">
            <div
              className="relative z-50"
              onMouseEnter={() => setIsDesktopMenuOpen(true)}
              onMouseLeave={() => setIsDesktopMenuOpen(false)}
            >
              <button
                className={`relative text-lg font-medium flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-500 ease-in-out
                 ${
                   isDesktopMenuOpen
                     ? "bg-white text-black shadow-lg"
                     : "text-white"
                 }
                 hover:bg-white hover:text-black hover:shadow-lg`}
              >
                <span className="relative">Menú</span>
              </button>

              {isDesktopMenuOpen && (
                <div className="absolute left-0 top-full bg-transparent pt-[15px]">
                  <div className="mt-3 bg-white shadow-lg p-12 rounded-lg w-[1300px] h-[550px] z-50 border border-gray-200 flex">
                    {/* Sección de texto */}
                    <div className="w-1/2 pr-16">
                      <ul className="space-y-4 text-black text-4xl font-bold">
                        {Object.keys(menuImages).map((item) => (
                          <li
                            key={item}
                            className="text-gray-300 font-semibold hover:text-black transition-colors duration-200 cursor-pointer"
                            onMouseEnter={() =>
                              setActiveImage(menuImages[item])
                            } // Cambia la imagen al hacer hover
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <p className="text-red-600 mt-6 font-semibold text-2xl">
                        Ahora disponible en renting
                      </p>
                      <ul className="mt-6 space-y-3 text-2xl text-gray-600 font-medium">
                        <li>Promociones</li>
                        <li>Encuéntranos</li>
                        <li>Empresas</li>
                      </ul>
                    </div>

                    {/* Sección de imagen dinámica */}
                    <div className="w-1/2 flex justify-center items-center">
                      <img
                        src={activeImage}
                        alt="Sección activa"
                        className="rounded-2xl shadow-lg w-[65%] h-auto object-cover transition-opacity duration-500"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Vehiculos */}

            {/* Vehículos */}
            <div
              className="relative z-50"
              onMouseEnter={() => setIsVehiclesMenuOpen(true)}
              onMouseLeave={() => setIsVehiclesMenuOpen(false)}
            >
              <button
                className={`relative text-lg font-medium flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-500 ease-in-out
               ${
                 isVehiclesMenuOpen
                   ? "bg-white text-black shadow-lg"
                   : "text-white"
               }
               hover:bg-white hover:text-black hover:shadow-lg`}
              >
                <span className="relative">Vehículos</span>
              </button>

              {isVehiclesMenuOpen && (
                <div className="absolute left-0 top-full bg-transparent pt-[15px] w-full flex justify-center">
                  <div className="mt-3 bg-white shadow-lg p-12 rounded-lg  min-w-[1300px] ml-[1000px] h-[550px] z-50 border border-gray-200 flex justify-center">
                    {/* Sección de Vehículos */}
                    <div className="grid grid-cols-4 gap-6 w-full">
                      {vehicles.map((vehicle) => (
                        <div
                          key={vehicle.id}
                          className={`p-6 rounded-lg transition-all duration-500 ease-in-out flex flex-col items-center justify-center 
            ${
              selectedVehicle === vehicle.id
                ? "bg-white shadow-xl"
                : "opacity-50 hover:opacity-100"
            }`}
                          onMouseEnter={() => setSelectedVehicle(vehicle.id)}
                          onClick={() => setSelectedVehicle(vehicle.id)}
                        >
                          <img
                            src={vehicle.img}
                            alt={vehicle.name}
                            className="w-[250px] h-auto"
                          />
                          <h3 className="mt-4 text-2xl font-bold">
                            {vehicle.name}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Logo centrado de forma correcta */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={logoSrc} alt="Logo" className="w-[150px]" />
          </div>

          <div className="flex items-center space-x-8">
            <button className="text-white text-lg font-medium hover:underline">
              Compra ahora
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-opacity-80">
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
        <div className="relative flex justify-center items-center py-4">
          <Logo2 width={160} />
          <button
            onClick={closeMobileMenu}
            className="absolute right-5 text-black text-4xl font-bold"
          >
            &times;
          </button>
        </div>

        <ul className="space-y-6 text-black text-2xl font-bold mt-4">
          <li>Batería</li>
          <li>Battery Stations</li>
          <li>App MySilence</li>
          <li>Configurador</li>
          <li>Reserva una prueba</li>
        </ul>
      </div>

      {/* Menú para Mobile de Vehículos */}
      <div
        className={`fixed inset-0 bg-white w-screen h-screen z-20 p-6 transition-transform duration-500 ${
          isVehiclesMenuOpen
            ? "translate-y-0 ease-out w-[230px]"
            : "-translate-y-full ease-in w-[230px]"
        } md:hidden`}
      >
        <div className="relative flex justify-center items-center py-4">
          <Logo2 width={160} />
          <button
            onClick={closeMobileMenu}
            className="absolute right-5 text-black text-4xl font-bold"
          >
            &times;
          </button>
        </div>
        <div className="flex justify-center">
          <ProductCard />
        </div>
      </div>

      {/* Texto principal */}
      <div className="relative  flex flex-col items-start justify-center h-full px-6 pt-[250px] md:pt-[155px] text-white text-left">
        <h1 className="text-[4xl] md:text-[130px] font-bold leading-tight md:leading-[140px]">
          Make your <br /> move
        </h1>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-opacity-80">
          Reserva una prueba &rarr;
        </button>
      </div>
    </div>
  );
  n;
};

export default NavbarWithExpandableMenu;
