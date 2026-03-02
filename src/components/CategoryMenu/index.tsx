import styles from "./styles.module.scss";

import monitor from "../../assets/icons/layouts.svg";
import moda from "../../assets/icons/moda 1.svg";
import whiskey from "../../assets/icons/whiskey.svg";
import ferramentas from "../../assets/icons/ferramentas 1.svg";
import corrida from "../../assets/icons/corrida 1.svg";
import saude from "../../assets/icons/cuidados-de-saude 1.svg";
import mercado from "../../assets/icons/supermercados 1.svg";

const categories = [
  { name: "Tecnologia", icon: monitor, active: true },
  { name: "Mercado", icon: mercado },
  { name: "Bebidas", icon: whiskey },
  { name: "Ferramentas", icon: ferramentas },
  { name: "Saúde", icon: saude },
  { name: "Esportes e Fitness", icon: corrida },
  { name: "Moda", icon: moda },
];

const CategoryMenu = () => {
  return (
    <section className={styles.categorySection}>
      <div className={styles.container}>
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`${styles.categoryItem} ${cat.active ? styles.active : ""}`}
          >
            <div className={styles.iconWrapper}>
              <img src={cat.icon} alt={cat.name} />
            </div>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryMenu;
