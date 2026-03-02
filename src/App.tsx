import { useState } from "react";
import ProductCard from "./components/productCard";
import type { Product } from "./types/producs";
import { useProducts } from "./hooks/useProducts";
import "./styles/global.scss";
import Header from "./components/header";
import Banner from "./components/Banner";
import CategoryMenu from "./components/CategoryMenu";

function App() {
  const { products, loading } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <main>
      <Header />
      <Banner />
      <CategoryMenu />
      <section>
        {/* {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onClick={(p) => setSelectedProduct}
          />
        ))} */}
      </section>
    </main>
  );
}

export default App;
