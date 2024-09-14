import { useDispatch } from "react-redux";

import styles from "./FilterBar.module.css";

import { setFilter } from "../../store/userSlice";
import { AppDispatch } from "../../store/store";

import { FilterBarProps } from "../../types";

export default function FilterBar({ filter }: FilterBarProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (field: string, value: string) => {
    dispatch(setFilter({ [field]: value }));
  };

  return (
    <section className={styles.filterBar}>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter.name}
        onChange={(e) => handleChange("name", e.target.value)}
        aria-label="Filter by name"
      />
      <input
        type="text"
        placeholder="Filter by username"
        value={filter.username}
        onChange={(e) => handleChange("username", e.target.value)}
        aria-label="Filter by username"
      />
      <input
        type="text"
        placeholder="Filter by email"
        value={filter.email}
        onChange={(e) => handleChange("email", e.target.value)}
        aria-label="Filter by email"
      />
      <input
        type="text"
        placeholder="Filter by phone"
        value={filter.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        aria-label="Filter by phone"
      />
    </section>
  );
}
