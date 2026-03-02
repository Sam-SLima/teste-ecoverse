import type { Product } from "../../types/producs";
import SimpleButton from "../SimpleButton";
import styles from "./styles.module.scss";

interface ProductCardProps {
  product: Product;
  onClick: (Product: Product) => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  return (
    <article className={styles.card} onClick={() => onClick(product)}>
      <img
        src={product.photo}
        alt={product.productName}
        className={styles.image}
      />

      <div className={styles.info}>
        <h3 className={styles.name}>{product.productName}</h3>
        <p className={styles.description}>{product.descriptionShort}</p>
        <p className={styles.price}>{formattedPrice}</p>

        <SimpleButton className={styles.productButton} variant="secondary">
          COMPRAR
        </SimpleButton>
      </div>
    </article>
  );
};

export default ProductCard;
