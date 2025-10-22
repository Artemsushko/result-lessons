import { useDispatch, useSelector } from "react-redux";
import styles from "./SortButton.module.css";
import { selectIsSorted } from "../../store/selectors/selectors";
import { toggleSortCreator } from "../../store/actions/actionsCreators";

const SortButton = () => {
  const isSorted = useSelector(selectIsSorted);
  const dispatch = useDispatch();

  return (
    <button
      className={styles.sortButton}
      onClick={() => dispatch(toggleSortCreator())}
    >
      {isSorted ? "Отключить сортировку" : "Сортировать A–Я"}
    </button>
  );
};

export default SortButton;
