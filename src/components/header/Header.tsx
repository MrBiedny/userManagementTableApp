import logo from "../../assets/logo.png";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="User Management Table Logo" />
      <h1>User Management Table</h1>
    </header>
  );
}
