import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { FilterState, User, UserState } from "../types";

const initialState: UserState = {
  users: [],
  filteredUsers: [],
  filter: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
  loading: false,
  error: null as string | null,
};

export const fetchUsers = createAsyncThunk<User[]>(
  "user/fetchUsers",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<Partial<FilterState>>) {
      state.filter = { ...state.filter, ...action.payload };
      const { name, username, email, phone } = state.filter;

      state.filteredUsers = state.users.filter((user) => {
        const matchesName = user.name
          .toLowerCase()
          .includes(name.toLowerCase());
        const matchesUsername = user.username
          .toLowerCase()
          .includes(username.toLowerCase());
        const matchesEmail = user.email
          .toLowerCase()
          .includes(email.toLowerCase());
        const matchesPhone = user.phone.includes(phone);

        return matchesName && matchesUsername && matchesEmail && matchesPhone;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
        state.filteredUsers = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { setFilter } = userSlice.actions;
export default userSlice.reducer;
