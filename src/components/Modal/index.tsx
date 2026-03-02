import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
import SimpleButton from "../SimpleButton";

interface ModalProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ product, isOpen, onClose }: ModalProps) => {
  if (!isOpen || !product) return null;

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <IoMdClose size={25} />
        </button>

        <div className={styles.body}>
          <div className={styles.imageSide}>
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className={styles.infoSide}>
            <h2 className={styles.title}>{product.productName}</h2>
            <p className={styles.price}>{formattedPrice}</p>
            <p className={styles.description}>{product.descriptionShort}</p>
            <a href="#" className={styles.details}>
              Veja mais detalhes do produto {">"}
            </a>

            <div className={styles.quantityContainer}>
              <div className={styles.selector}>
                <button onClick={handleDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease}>+</button>
              </div>
              <SimpleButton variant="primary" className={styles.buyBtn}>
                COMPRAR
              </SimpleButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
