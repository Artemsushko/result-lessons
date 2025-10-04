import styles from "./SortButton.module.css";

const SortButton = ({ isSorted, setIsSorted }) => {
  return (
    <button
      className={styles.sortButton}
      onClick={() => setIsSorted((prev) => !prev)}
    >
      {isSorted ? "Отключить сортировку" : "Сортировать A–Я"}
    </button>
  );
};

export default SortButton;
