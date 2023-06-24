import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    find: (state, { payload }) => { 
      state.filter = payload
    }
  },
});

export const { find } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors
