export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface FilterState {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UserState {
  users: User[];
  filteredUsers: User[];
  filter: FilterState;
  loading: boolean;
  error: null | string;
}

export interface FilterBarProps {
  filter: FilterState;
  onFilterChange: (field: string, value: string) => void;
}

export interface UserTableRowProps {
  user: Omit<User, "id">;
}

export interface ErrorProps {
  message: string;
}
