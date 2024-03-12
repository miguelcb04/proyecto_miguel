import React from "react";
import { RiSearch2Line } from "react-icons/ri";


const Header = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };
  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     if (searchTerm === 'salon') {
  //       // Redirige al usuario al elemento con el id "salon"
  //       window.location.href = '#salon';
  //     } else {
  //       // Agrega aquí el comportamiento para otras búsquedas
  //     }
  //   }
  // };
  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">FURNITURE</h1>
          {/* <p className="text-gray-500">07 octubre 2022</p> */}
        </div>
        <form>
        <div className="w-full relative">
      <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
      <input 
        type="text"
        className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
        placeholder="Buscador"
        id="busca"
        // value={searchTerm}
        // onChange={handleSearch}
        // onKeyPress={handleKeyPress}
      />
    </div>
        </form>
      </div>
      {/* Tabs */}
      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        <a
          href="#"
          className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
        >
          Tipos de productos
        </a>
        <a href="salon" className="py-2 pr-4">
          Salon
        </a>
        <a href="#" className="py-2 pr-4">
          Dormitorio
        </a>
        <a href="#" className="py-2">
          Cocina
        </a>
      </nav>
    </header>
  );
};

export default Header;
