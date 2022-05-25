import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appNm: "",
  lang: "my",
  loading: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setLoading: (state, payload) => {
      state.loading = payload;
    },
  },
});

export const { setLoading } = mainSlice.actions;

export default mainSlice.reducer;
