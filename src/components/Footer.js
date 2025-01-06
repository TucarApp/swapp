import Logo2 from '../Logos/Logo2'



const Footer = () => {
    return (
      <footer className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Nosotros */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 uppercase">Nosotros</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Sobre Silence</a></li>
                <li><a href="#" className="hover:text-gray-800">Careers</a></li>
                <li><a href="#" className="hover:text-gray-800">Proyectos subvencionados</a></li>
                <li><a href="#" className="hover:text-gray-800">Política de calidad y medioambiente</a></li>
                <li><a href="#" className="hover:text-gray-800">Código de conducta</a></li>
                <li><a href="#" className="hover:text-gray-800">Blog</a></li>
              </ul>
            </div>
            {/* Soporte */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 uppercase">Soporte</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-800">Manual de usuario</a></li>
                <li><a href="#" className="hover:text-gray-800">Encuéntranos</a></li>
                <li><a href="#" className="hover:text-gray-800">Área Dealer</a></li>
                <li><a href="#" className="hover:text-gray-800">Media House</a></li>
              </ul>
            </div>
            {/* Ecosistema */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 uppercase">Ecosistema</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">App MySilence</a></li>
                <li><a href="#" className="hover:text-gray-800">Batería</a></li>
                <li><a href="#" className="hover:text-gray-800">Battery Station</a></li>
                <li><a href="#" className="hover:text-gray-800">Sharing Acciona</a></li>
              </ul>
            </div>
            {/* Empresas */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 uppercase">Empresas</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Hazte distribuidor</a></li>
                <li><a href="#" className="hover:text-gray-800">Flotas y soluciones</a></li>
                <li><a href="#" className="hover:text-gray-800">Battery Station Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex justify-between items-center border-t border-gray-200 pt-6">
            {/* Logo */}
            <Logo2 />
            <div>
            

            </div>
            {/* Modelos */}
            <div className="flex space-x-4 text-2xl font-bold text-gray-800">
              <span>S01+</span>
              <span>S01</span>
              <span>S02</span>
              <span>S04</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  