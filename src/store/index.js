import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar-slice";
import homeFaqReducer from "./home/faq";
import bloodStockReducer from "./blood/stocks";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer.reducer,
    homeFaq: homeFaqReducer.reducer,
    bloodStock: bloodStockReducer.reducer,
  },
});

export default store;
