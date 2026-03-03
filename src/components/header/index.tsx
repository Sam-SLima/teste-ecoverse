import styles from "./styles.module.scss";
import logo from "../../assets/images/Logo.svg";
import InputSearch from "../inputSearch";
import Group from "../../assets/icons/Group.svg";
import Heart from "../../assets/icons/Heart.svg";
import User from "../../assets/icons/UserCircle.svg";
import Cart from "../../assets/icons/ShoppingCart.svg";
import ShieldCheck from "../../assets/icons/ShieldCheck.svg";
import Truck from "../../assets/icons/Truck.svg";
import CreditCard from "../../assets/icons/CreditCard.svg";
import Crown from "../../assets/icons/CrownSimple.svg";
const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.topBar}>
        <li>
          <p className={styles.topDesc}>
            <img src={ShieldCheck} alt="escudo confere" />
            Compra<span> 100% segura</span>
          </p>
        </li>
        <li>
          <p className={styles.topDesc}>
            <img src={Truck} alt="caminhão" />
            <span>Frete grátis </span>acima de 20R$
          </p>
        </li>
        <li>
          <p className={styles.topDesc}>
            <img
              className={styles.topIcons}
              src={CreditCard}
              alt="cartão de crédito"
            />
            <span>Parcele </span>suas compras
          </p>
        </li>
      </ul>
      <div className={styles.mainHeader}>
        <img src={logo} alt="Logo da Econverse" />
        <InputSearch />
        <ul className={styles.services}>
          <li className={styles.service}>
            <img src={Group} alt="grupo" />
          </li>
          <li className={styles.service}>
            <img src={Heart} alt="grupo" />
          </li>
          <li className={styles.service}>
            <img src={User} alt="grupo" />
          </li>
          <li className={styles.service}>
            <img src={Cart} alt="grupo" />
          </li>
        </ul>
      </div>
      <nav>
        <ul className={styles.menu}>
          <li>TODAS CATEGORIAS</li>
          <li>SUPERMERCADO</li>
          <li>LIVROS</li>
          <li>MODA</li>
          <li className={styles.active}>OFERTAS DO DIA</li>
          <li className={styles.assinatura}>
            <img className={styles.crown} src={Crown} alt="coroa" /> ASSINATURA
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
