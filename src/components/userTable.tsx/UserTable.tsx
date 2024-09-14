import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./UserTable.module.css";
import { RootState, AppDispatch } from "../../store/store";
import { setFilter, fetchUsers } from "../../store/userSlice";

import FilterBar from "../filterBar/FilterBar";
import UserTableHeader from "../userTableHeader.tsx/UserTableHeader";
import UserTableRow from "../userTableRow.tsx/UserTableRow";
import Loader from "../loader/Loader";
import Error from "../error/Error";

export default function UserTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredUsers, filter, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (field: string, value: string) => {
    dispatch(setFilter({ [field]: value }));
  };

  return (
    <>
      <FilterBar filter={filter} onFilterChange={handleFilterChange} />

      {loading && <Loader />}

      {error && <Error message={error} />}

      {!loading && !error && (
        <section className={styles.tableContainer}>
          <table className={styles.table} aria-label="User Table">
            <UserTableHeader />
            <tbody>
              {filteredUsers.map((user) => (
                <UserTableRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}
