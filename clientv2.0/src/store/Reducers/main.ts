import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateProps {
  loading: boolean;
  appNm: string;
}
const initialState: initialStateProps = {
  appNm: "National Museum (Yangon)",
  loading: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {setLoading} = mainSlice.actions

export default mainSlice.reducer
