import styles from "./Error.module.css";

import { ErrorProps } from "../../types";

export default function Error({ message }: ErrorProps) {
  return (
    <div className={styles.errorContainer} role="alert">
      <div className={styles.errorIcon}>❌</div>
      <div className={styles.errorMessage}>{message}</div>
    </div>
  );
}
