import ClipLoader from "react-spinners/ClipLoader";

import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderContainer} role="status">
      <ClipLoader color="#1d61e1" size={100} />
    </div>
  );
}
