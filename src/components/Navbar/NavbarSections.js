import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import Logo2 from "../../Logos/Logo2";
import Link from "next/link";

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
    { id: "cpx", name: "CPX", img: "/CPX/cpxcostado.webp" },
    { id: "vs1", name: "VS1", img: "/VS1/vs1costado.png" },
    { id: "vs3", name: "VS3", img: "/VS3/VS3.webp" },
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
    <div className="relative">
      {/* Navbar */}
      <header className="fixed top-0 w-full h-[80px] bg-[#1F1F1F] shadow-md z-50  items-center px-10 hidden md:flex">
        {/* Menú Izquierdo */}
        <div className="flex items-center space-x-8">
          {/* Menú */}
          <div
            className="relative z-50"
            onMouseEnter={() => setIsDesktopMenuOpen(true)}
            onMouseLeave={() => setIsDesktopMenuOpen(false)}
          >
            <button
              className={`relative text-lg font-medium flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-500 ease-in-out
          ${isDesktopMenuOpen ? "bg-white text-black shadow-lg" : "text-white"}
          hover:bg-white hover:text-black hover:shadow-lg`}
            >
              <span>Menú</span>
            </button>

            {isDesktopMenuOpen && (
              <div className="absolute left-0 top-full bg-transparent pt-[15px]">
                <div className="mt-3 bg-white shadow-lg p-12 rounded-lg w-[1300px] h-[550px] z-50 border border-gray-200 flex">
                  {/* Aquí se mantiene la lógica original del menú */}
                  <div className="w-1/2 pr-16">
                    <ul className="space-y-4 text-black text-4xl font-bold">
                      {Object.keys(menuImages).map((item) => (
                        <li
                          key={item}
                          className="text-gray-300 font-semibold hover:text-black transition-colors duration-200 cursor-pointer"
                          onMouseEnter={() => setActiveImage(menuImages[item])}
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

          {/* Vehículos */}
          <div
            className="relative z-50"
            onMouseEnter={() => setIsVehiclesMenuOpen(true)}
            onMouseLeave={() => setIsVehiclesMenuOpen(false)}
          >
            <button
              className={`relative text-lg font-medium flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-500 ease-in-out
    ${isVehiclesMenuOpen ? "bg-white text-black shadow-lg" : "text-white"}
    hover:bg-white hover:text-black hover:shadow-lg`}
            >
              <span>Vehículos</span>
            </button>

            {isVehiclesMenuOpen && (
              <div className="absolute left-0 top-full bg-transparent pt-[15px] w-full flex justify-center pl-[550px]">
                <div className="mt-3 bg-white shadow-lg p-12 rounded-lg min-w-[1300px] h-[410px] z-50 border border-gray-200 flex justify-center">
                  <div className="grid grid-cols-4 gap-6 w-full">
                    {vehicles.map((vehicle) => (
                      <Link key={vehicle.id} href={`/${vehicle.id}`} passHref>
                        <div
                          className={`p-6 rounded-lg transition-all duration-500 ease-in-out flex flex-col items-center justify-between h-[320px]
                ${
                  selectedVehicle === vehicle.id
                    ? "bg-white shadow-xl"
                    : "opacity-50 hover:opacity-100"
                }
              `}
                          onMouseEnter={() => setSelectedVehicle(vehicle.id)}
                        >
                          <img
                            src={vehicle.img}
                            alt={vehicle.name}
                            className="w-[250px] h-[200px] object-contain"
                          />
                          <h3 className="mt-4 text-2xl font-bold">
                            {vehicle.name}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Logo Centrado */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <img src={logoSrc} alt="Logo" className="w-[150px]" />
          </Link>
        </div>

        {/* Botones de Acción a la Derecha */}
        <div className="flex space-x-6 ml-auto">
          <button className="text-white text-lg font-medium hover:opacity-80">
            Compra ahora
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200">
            Reserva una prueba
          </button>
        </div>
      </header>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center md:hidden bg-[#1F1F1F]">
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
          <Link href="/">
            <img src="/Logo_w.svg" alt="Silence" width={120} />
          </Link>
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

      {/* Menú móvil */}
      <div
        className={`fixed inset-0 bg-white z-20 p-6 transform ${
          isMobileMenuOpen
            ? "translate-y-0 ease-out duration-500"
            : "-translate-y-full ease-in duration-500"
        }`}
      >
        <div className="relative flex justify-center items-center py-4">
          <Link href="/">
            <Logo2 width={160} />
          </Link>
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

      {/* Menú móvil Vehículos */}
      <div
        className={`fixed inset-0 bg-white w-screen h-screen z-20 p-6 transition-transform duration-500 ${
          isVehiclesMenuOpen
            ? "translate-y-0 ease-out w-[230px]"
            : "-translate-y-full ease-in w-[230px]"
        } md:hidden`}
      >
        <div className="relative flex justify-center items-center py-4">
          <Link href="/">
            <Logo2 width={160} />
          </Link>
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
    </div>
  );
  n;
};

export default NavbarWithExpandableMenu;
