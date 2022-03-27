import { createSlice } from "@reduxjs/toolkit";

const initialState = { mountNumber: 0, youMayLikes: [] };

const homeYouMayLikeSlice = createSlice({
  name: "home-page-you-may-like",
  initialState,
  reducers: {
    setMountNumber(state, action) {
      state.mountNumber = action.payload;
    },
    addValues(state, action) {
      state.youMayLikes = action.payload;
    },
    createValue(state, action) {
      const data = action.payload;

      state.youMayLikes.push(data);
    },
    updateValue(state, action) {
      const data = action.payload;

      const findValue = state.youMayLikes.findIndex((f) => f.id === data.id);
      if (findValue !== -1) {
        state.youMayLikes[findValue] = data;
      }
    },
    deleteValue(state, action) {
      const remaininFaqs = state.youMayLikes.filter((faq) => faq.id !== action.payload);
      state.youMayLikes = remaininFaqs;
    },
  },
});

export default homeYouMayLikeSlice;
export const homeYouMayLikeActions = homeYouMayLikeSlice.actions;
