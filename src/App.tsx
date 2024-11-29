import { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import CarrouselModal from "./components/CarrouselModal/CarrouselModal";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InitialScreen from "./components/InitialScreen/InitialScreen";
import InspoGallery from "./components/InspoGallery/InspoGallery";
import MainProducts from "./components/MainProducts/MainProducts";
import MissionVisionAndValues from "./components/MissionVisionAndValues/MissionVisionAndValues";
import ProductsAndServices from "./components/ProductsAndServices/ProductsAndServices";
import WhenToBuyFlowers from "./components/WhenToBuyFlowers/WhenToBuyFlowers";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [carrouselInitialSlide, setCarrouselInitialSlide] = useState(0);

  const openCarrouselModal = (initialSlide: number) => {
    setCarrouselInitialSlide(initialSlide);
    document.body.style.overflow = "hidden";
    setIsModalVisible(true);
  };

  const closeCarrouselModal = () => {
    document.body.style.overflow = "";
    setIsModalVisible(false);
  };

  return (
    <>
      <Header />
      <InitialScreen />
      <About />
      <MissionVisionAndValues />
      <ProductsAndServices />
      <MainProducts />
      <WhenToBuyFlowers />
      <Contact />
      <InspoGallery openCarrouselModal={openCarrouselModal} />
      <Footer />
      {isModalVisible && (
        <CarrouselModal
          closeCarrouselModal={closeCarrouselModal}
          initialSlide={carrouselInitialSlide}
        />
      )}
    </>
  );
}

export default App;
