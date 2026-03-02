import Logo from "../../assets/images/Logo.svg";
import styles from "./styles.module.scss";
const Marcas = () => {
  const marcas = [
    { name: "marca 1", logo: Logo },
    { name: "marca 2", logo: Logo },
    { name: "marca 3", logo: Logo },
    { name: "marca 4", logo: Logo },
    { name: "marca 5", logo: Logo },
  ];
  return (
    <section className={styles.brandsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Navegue por marcas</h2>
        <div className={styles.slider}>
          <div className={styles.brandsList}>
            {marcas.map((brand, index) => (
              <div key={index} className={styles.brandCard}>
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marcas;
