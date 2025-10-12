import styles from "./SearchBox.module.css";

const SearchBox = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Поиск..."
      className={styles.searchBox}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBox;
