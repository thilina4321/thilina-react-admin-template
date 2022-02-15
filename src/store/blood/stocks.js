import { createSlice } from "@reduxjs/toolkit";
const initialState = { mountNumber: 0, stocks: [] };

const bloodStockFaqSlice = createSlice({
  name: "blood-stock-faq",
  initialState,
  reducers: {
    setMountNumber(state, action) {
      state.mountNumber = action.payload;
    },
    addBloodStock(state, action) {
      state.stocks = action.payload;
    },
    createValue(state, action) {
      const data = action.payload;
      console.log(data, 'my data');
      state.stocks.push(data);
    },
    updateValue(state, action) {
      const data = action.payload;

      const findValue = state.stocks.findIndex((f) => f.id === data.id);
      if (findValue !== -1) {
        state.stocks[findValue] = data;
      }
    },
    deleteValue(state, action) {
      const remainingValues = state.stocks.filter((value) => value.id !== action.payload);
      state.stocks = remainingValues;
    },
  },
});

export default bloodStockFaqSlice;
export const bloodStockActions = bloodStockFaqSlice.actions;
