import { useState, type FormEvent } from "react";
import styles from "./styles.module.scss";
import SimpleButton from "../SimpleButton";

const Newsletter = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Cadastro enviado com sucesso");
    setNome("");
    setEmail("");
  };
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Inscreva-se na nossa newsletter</h2>
          <p className={styles.description}>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="text"
              placeholder="digite seu nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              className={styles.input}
              type="email"
              placeholder="digite seu e-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SimpleButton
              className={styles.button}
              variant="primary"
              type="submit"
            >
              Inscrever
            </SimpleButton>
          </div>

          <label className={styles.label}>
            <input type="checkbox" required /> Aceito os termos e condições
          </label>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
