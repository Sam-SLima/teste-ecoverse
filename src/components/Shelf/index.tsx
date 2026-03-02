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
        <tr className={styles.tabs}>
          <td className={styles.tabCategory}>
            <a className={styles.active}>CELULAR</a>
          </td>
          <td className={styles.tabCategory}>
            <a>ACESSÓRIOS</a>
          </td>
          <td className={styles.tabCategory}>
            <a>TABLETS</a>
          </td>
          <td className={styles.tabCategory}>
            <a>NOTEBOOKS</a>
          </td>
          <td className={styles.tabCategory}>
            <a>TVS</a>
          </td>
          <td className={styles.tabCategory}>
            <a>VER TODOS</a>
          </td>
        </tr>
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
                  onClick={(p) => setSelectedProduct(p)}
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
