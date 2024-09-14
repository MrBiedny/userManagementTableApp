import { UserTableRowProps } from "../../types";

import styles from "./UserTableRow.module.css";

export default function UserTableRow({ user }: UserTableRowProps) {
  return (
    <tr className={styles.row} role="row">
      <td role="cell">{user.name}</td>
      <td role="cell">{user.username}</td>
      <td role="cell">{user.email}</td>
      <td role="cell">{user.phone}</td>
    </tr>
  );
}
