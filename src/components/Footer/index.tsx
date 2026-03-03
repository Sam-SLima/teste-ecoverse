import styles from "./styles.module.scss";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Logo from "../../assets/images/Logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.branding}>
          <img src={Logo} alt="Econverse" className={styles.logo} />
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          </p>
          <div className={styles.social}>
            <img src={Instagram} alt="Instagram" />
            <img src={Facebook} alt="Facebook" />
            <img src={LinkedIn} alt="Linkedin" />
          </div>
        </div>
        <div className={styles.divider} />
        <nav className={styles.navLinks}>
          <div className={styles.column}>
            <h3>Institucional</h3>
            <ul>
              <li>Sobre Nós</li>
              <li>Movimento</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Ajuda</h3>
            <ul>
              <li>Suporte</li>
              <li>Fale Conosco</li>
              <li>Perguntas Frequentes</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Termos</h3>
            <ul>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
              <li>Troca e Devolução</li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;
