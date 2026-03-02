import type { Product } from "../../types/producs";
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
    <article>
      <img src={product.photo} alt={product.productName} />

      <div>
        <h3>{product.productName}</h3>
        <p>{product.descriptionShort}</p>
        <p>{formattedPrice}</p>
      </div>
    </article>
  );
};

export default ProductCard;
