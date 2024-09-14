import styles from "./Footer.module.css";

import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="User Management Table Logo" />
        <span>User Management Table</span>
      </div>
      <div>
        <p>&copy; 2024 All rights reserved.</p>
      </div>
    </footer>
  );
}
