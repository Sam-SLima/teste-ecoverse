import Parceiros from "../../assets/images/parceiros.svg";
import SimpleButton from "../SimpleButton";
import styles from "./styles.module.scss";

export const Partners = () => {
  const partnerData = [
    {
      title: "Parceiros",
      description: "Lorem ipsum dolor sit amet, consectetur",
      buttonText: "Confira",
      image: Parceiros,
    },
    {
      title: "Parceiros",
      description: "Lorem ipsum dolor sit amet, consectetur",
      buttonText: "Confira",
      image: Parceiros,
    },
  ];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          {partnerData.map((item, index) => (
            <div
              key={index}
              className={styles.partnerCard}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className={styles.content}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.description}>{item.description}</p>
                <SimpleButton
                  className={styles.partnerButton}
                  variant="primary"
                >
                  {item.buttonText}
                </SimpleButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
