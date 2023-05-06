import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,

  // component
  alert: false,
  alertType: "",
  alertText: "rohit rana is my fucking rana.Iam hot blooded rana.",

  // for mobile
  isFilterSidebarOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    showAlert: (state, { payload }) => {
      const { type, text } = payload;
      state.alert = true;
      state.alertType = type;
      state.alertText = text;
    },

    toggleFilterSidebar: (state) => {
      state.isFilterSidebarOpen = !state.isFilterSidebarOpen;
    },
  },
  extraReducers: (builder) => {},
});

// Action creators are generated for each case reducer function
export const { showAlert,toggleFilterSidebar } = userSlice.actions;

export default userSlice.reducer;
