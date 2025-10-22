import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { selectSearch } from "../../store/selectors/selectors";
import { setSearchCreator } from "../../store/actions/actionsCreators";

const SearchBox = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  return (
    <input
      type="text"
      placeholder="Поиск..."
      className={styles.searchBox}
      value={search}
      onChange={(e) => dispatch(setSearchCreator(e.target.value))}
    />
  );
};

export default SearchBox;
