import styles from "./UserTableHeader.module.css";

export default function UserTableHeader() {
  return (
    <thead className={styles.header}>
      <tr role="row">
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Phone number</th>
      </tr>
    </thead>
  );
}
