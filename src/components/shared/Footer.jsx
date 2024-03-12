import React from 'react';
import { FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">¡Síguenos en nuestras redes sociales!</h2>
        <div className="flex space-x-4">
        <a href="https://www.instagram.com/" className="text-white hover:text-gray-400">
            <FaInstagram className="text-2xl md:text-3xl lg:text-3xl" />
          </a>
          <a href="https://www.facebook.com/" className="text-white hover:text-gray-400">
            <IoLogoFacebook className="text-2xl md:text-3xl lg:text-3xl" />
          </a>
          <a href="https://twitter.com/" className="text-white hover:text-gray-400">
            <FaTwitterSquare className="text-2xl md:text-3xl lg:text-3xl" />
          </a>
        </div>
        <p className="mt-4">© 2024 Luxury Sales. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;





