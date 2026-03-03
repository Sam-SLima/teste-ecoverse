import "./styles/global.scss";
import Header from "./components/header";
import Banner from "./components/Banner";
import CategoryMenu from "./components/CategoryMenu";
import Shelf from "./components/Shelf";
import Partners from "./components/Partners";
import Marcas from "./components/Brands";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <CategoryMenu />
      <Shelf hasCategories={true} />
      <Partners />
      <Shelf />
      <Partners />
      <Marcas />
      <Shelf />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
