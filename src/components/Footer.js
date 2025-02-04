import Logo2 from '../Logos/Logo2'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";



const Footer = () => {
    return (
      <footer className="bg-gray-50 py-10">
        <div className="max-w mx-auto px-6">
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
          <div className="mt-10  flex  justify-between items-center  border-gray-200 pt-6">
            {/* Logo */}
            <Logo2  width={200}/>
            
          
           
          </div>
          <div className='mt-[15px] flex gap-x-[15px]'>
          <FaFacebook color='#333333' size={23} />
          <FaInstagram  color='#333333' size={23}/>
          <FaXTwitter color='#333333' size={23} />
          <FaLinkedin color='#333333' size={23} />
          <FaYoutube color='#333333' size={23} />



          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  