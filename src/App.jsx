import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };
  
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Articulos</h2>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <Card
              img="sofa.jpeg"
              description="Sofa esquinero de lujo"
              price="5699,90€"
              // inventory="12"
            />
            {/* Card */}
            <Card
              img="mesa.png"
              description="Mesa de TV de diseño moderno modelo Estoril"
              price="1225,00€"
            />
            {/* Card */}
            <Card
              img="vitrina.png"
              description="Vitrina de lujo modelo Cerdeña"
              price="1925.00€"
            />
            {/* Card */}
            <Card
              img="canape.webp"
              description="Canapé abatible Waybox Blanco"
              price="525,99€"
            />
            {/* Card */}
            <Card
              img="colchon.webp"
              description="Colchon Hybrid Luxe Edition"
              price="1418€"
            />
            {/* Card */}
            <Card
              img="mesilla.webp"
              description="Mesita de noche de lujo moca/latón"
              price="2540,90€"
            />
            {/* Card */}
            <Card
              img="isla.webp"
              description="Mueble de cocina Japandi de madera gris"
              price="1159,99€"
            />
            {/* Card */}
            <Card
              img="extractor.jpg"
              description="Extractor Siesmens iQ700 LF91BUV50"
              price="1063,90€"
            />
            {/* Card */}
            <Card
              img="mueble.webp"
              description="Tire cesta de mimbre con madera Haya"
              price="130,99€"
            />
            {/* Card */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
