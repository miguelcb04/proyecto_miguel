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
import Footer from "./components/shared/Footer";

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
          {/* <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Descripción</h2>
          </div> */}
          <div className="bg-[#1F1D2B] p-4 text-gray-400">
            <h1 className="text-xl text-gray-300 p-4">Descripción</h1>
          <p className="p-4">FURNITURE es una tienda especializada que ofrece una amplia gama de objetos de decoración y muebles para interiores, centrados en mejorar y embellecer los espacios de salón, cocina y dormitorio. Con un enfoque en la calidad, el diseño innovador y la funcionalidad, FURNITURE se dedica a proporcionar a sus clientes una experiencia de compra excepcional y soluciones que satisfagan sus necesidades y gustos estéticos.</p>
          </div>
          <div className=" items-center justify-between mb-16 mt-10 bg-[#1F1D2B] p-4 text-gray-400 ">
            <h2 className="text-xl text-gray-300 p-4" id="salon">Salón</h2>
            <h3>¡Bienvenido a nuestra tienda de muebles de lujo!</h3>
            <p>Descubre nuestros exclusivos productos diseñados para elevar el estilo y la elegancia de tu hogar. En nuestra colección, encontrarás una exquisita selección de muebles que combina lujo, confort y sofisticación.
              <p><strong>1-Sofá Esquinero de Lujo:</strong> Sumérgete en el lujo supremo con nuestro sofá esquinero de diseño exclusivo. Con su suave tapizado de alta calidad y su diseño contemporáneo, este sofá es el epítome del confort y la elegancia. Perfecto para crear un espacio de reunión lujoso en tu sala de estar.
                <p><strong>2-Mesa de TV de Diseño Moderno Modelo Estoril:</strong> Eleva la experiencia de entretenimiento en tu hogar con nuestra mesa de TV de diseño moderno. El modelo Estoril combina funcionalidad y estilo, ofreciendo un soporte elegante para tu televisor y espacio de almacenamiento para tus dispositivos multimedia. Su diseño minimalista y acabado de primera calidad hacen de esta mesa de TV una pieza imprescindible para cualquier sala de estar contemporánea.
                  <p><strong>3-Vitrina de Lujo Modelo Cerdeña:</strong> Haz una declaración de estilo con nuestra vitrina de lujo modelo Cerdeña. Esta impresionante pieza de mobiliario combina el lujo con la funcionalidad, ofreciendo un elegante espacio de exhibición para tus objetos más preciados. Con su diseño elaborado y acabados refinados, la vitrina Cerdeña añadirá un toque de sofisticación a cualquier ambiente.</p>
                </p>
              </p>
            </p>
          </div>
          {/* Content */}
          <div>
          <div className="p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
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
            </div>
            <div className=" items-center justify-between mb-16 mt-10 bg-[#1F1D2B] p-4 text-gray-400 ">
            <h2 className="text-xl text-gray-300 p-4" id="dormitorio">Dormitorio</h2>
            <p>¡Transforma tu dormitorio en un santuario de descanso y estilo con nuestra exclusiva colección de muebles de dormitorio de lujo!
              <p><strong>1-Sofá Esquinero de Lujo:</strong> Sumérgete en el lujo supremo con nuestro sofá esquinero de diseño exclusivo. Con su suave tapizado de alta calidad y su diseño contemporáneo, este sofá es el epítome del confort y la elegancia. Perfecto para crear un espacio de reunión lujoso en tu sala de estar.
                <p><strong>2-Mesa de TV de Diseño Moderno Modelo Estoril:</strong> Eleva la experiencia de entretenimiento en tu hogar con nuestra mesa de TV de diseño moderno. El modelo Estoril combina funcionalidad y estilo, ofreciendo un soporte elegante para tu televisor y espacio de almacenamiento para tus dispositivos multimedia. Su diseño minimalista y acabado de primera calidad hacen de esta mesa de TV una pieza imprescindible para cualquier sala de estar contemporánea.
                  <p><strong>3-Vitrina de Lujo Modelo Cerdeña:</strong> Haz una declaración de estilo con nuestra vitrina de lujo modelo Cerdeña. Esta impresionante pieza de mobiliario combina el lujo con la funcionalidad, ofreciendo un elegante espacio de exhibición para tus objetos más preciados. Con su diseño elaborado y acabados refinados, la vitrina Cerdeña añadirá un toque de sofisticación a cualquier ambiente.</p>
                </p>
              </p>
            </p>
          </div>
            <div className="p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <Card
              img="canape.webp"
              description="Canapé abatible Waybox Blanco"
              price="1025,99€"
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
            </div>
            <div className="items-center justify-between mb-16 mt-10 bg-[#1F1D2B] p-4 text-gray-400 ">
            <h2 className="text-xl text-gray-300 p-4" id="cocina">Cocina</h2>
            <h3>¡Bienvenido a nuestra tienda de muebles de lujo!</h3>
            <p>Descubre nuestros exclusivos productos diseñados para elevar el estilo y la elegancia de tu hogar. En nuestra colección, encontrarás una exquisita selección de muebles que combina lujo, confort y sofisticación.
              <p><strong>1-Sofá Esquinero de Lujo:</strong> Sumérgete en el lujo supremo con nuestro sofá esquinero de diseño exclusivo. Con su suave tapizado de alta calidad y su diseño contemporáneo, este sofá es el epítome del confort y la elegancia. Perfecto para crear un espacio de reunión lujoso en tu sala de estar.
                <p><strong>2-Mesa de TV de Diseño Moderno Modelo Estoril:</strong> Eleva la experiencia de entretenimiento en tu hogar con nuestra mesa de TV de diseño moderno. El modelo Estoril combina funcionalidad y estilo, ofreciendo un soporte elegante para tu televisor y espacio de almacenamiento para tus dispositivos multimedia. Su diseño minimalista y acabado de primera calidad hacen de esta mesa de TV una pieza imprescindible para cualquier sala de estar contemporánea.
                  <p><strong>3-Vitrina de Lujo Modelo Cerdeña:</strong> Haz una declaración de estilo con nuestra vitrina de lujo modelo Cerdeña. Esta impresionante pieza de mobiliario combina el lujo con la funcionalidad, ofreciendo un elegante espacio de exhibición para tus objetos más preciados. Con su diseño elaborado y acabados refinados, la vitrina Cerdeña añadirá un toque de sofisticación a cualquier ambiente.</p>
                </p>
              </p>
            </p>
          </div>
            <div className="p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
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
              description="Tira cesta de mimbre con madera Haya"
              price="130,99€"
            />
            {/* Card */}
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
