import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../productCard";
import { useState } from "react";
import Modal from "../Modal";
import styles from "./styles.module.scss";
import ChevronLeft from "../../assets/icons/VectorLeft.svg";
import ChevronRight from "../../assets/icons/VectorRight.svg";

interface ShelfProps {
  hasCategories?: boolean;
}

export const Shelf = ({ hasCategories = false }: ShelfProps) => {
  const { products, loading } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  if (loading)
    return <div className={styles.loading}>Carregando produtos...</div>;

  return (
    <section className={styles.shelf}>
      <div className={styles.header}>
        <div className={styles.line} />
        <h2 className={styles.title}>Produtos Relacionados</h2>
        <div className={styles.line} />
      </div>
      {hasCategories ? (
        <nav className={styles.navTabs} aria-label="Categorias de produtos">
          <ul className={styles.tabsList}>
            <li className={styles.tabItem}>
              <a href="#" className={styles.active}>
                CELULAR
              </a>
            </li>
            <li className={styles.tabItem}>
              <a href="#">ACESSÓRIOS</a>
            </li>
            <li className={styles.tabItem}>
              <a href="#">TABLETS</a>
            </li>
            <li className={styles.tabItem}>
              <a href="#">NOTEBOOKS</a>
            </li>
            <li className={styles.tabItem}>
              <a href="#">TVS</a>
            </li>
            <li className={styles.tabItem}>
              <a href="#">VER TODOS</a>
            </li>
          </ul>
        </nav>
      ) : (
        <div className={styles.seeAll}>
          <a href="#" className={styles.seAllTitle}>
            Ver todos
          </a>
        </div>
      )}
      <div className={styles.container}>
        <button className={styles.arrow} aria-label="Anterior">
          <img src={ChevronLeft} alt="seta esquerda" />
        </button>

        <div className={styles.grid}>
          {products.map(
            (product, index) =>
              index < 4 && (
                <ProductCard
                  key={index}
                  product={product}
                  onClick={(p) => setSelectedProduct}
                />
              ),
          )}
        </div>

        <button className={styles.arrow} aria-label="Próximo">
          <img src={ChevronRight} alt="seta direita" />
        </button>
      </div>
      {selectedProduct && (
        <Modal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};
