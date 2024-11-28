import "./App.css";
import About from "./components/About/About";
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
      <InspoGallery />
      <Footer />
    </>
  );
}

export default App;
