import SimpleButton from "../SimpleButton";
import styles from "./styles.module.scss";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>
            Venha conhecer nossas <br /> promoções
          </h1>
          <p>
            <span>50% off</span> nos produtos
          </p>
          <SimpleButton className={styles.bannerButton} variant="primary">
            Ver Produto
          </SimpleButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
