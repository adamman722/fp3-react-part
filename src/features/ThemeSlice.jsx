import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "primary"
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    selectTheme: (state, action) => {
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { selectTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
