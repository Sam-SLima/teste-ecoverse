import { HiOutlineSearch } from "react-icons/hi";
import SearchIcon from "../../assets/icons/MagnifyingGlass.svg";
import styles from "./styles.module.scss";

const InputSearch = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="O que você está buscando?"
        className={styles.searchInput}
      />
      <button
        type="submit"
        className={styles.searchButton}
        aria-label="Pesquisar"
      >
        <img src={SearchIcon} alt="icone de pesquisa" />
      </button>
    </div>
  );
};

export default InputSearch;
