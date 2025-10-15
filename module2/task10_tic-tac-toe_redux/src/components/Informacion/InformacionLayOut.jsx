import styles from "./Informacion.module.css";

const InformacionLayOut = ({ result, status }) => {
  let className = styles.info;

  if (status === "draw") className += ` ${styles["info-draw"]}`;
  else if (status === "win") className += ` ${styles["info-win"]}`;
  return <div className={className}>{result}</div>;
};

export default InformacionLayOut;
