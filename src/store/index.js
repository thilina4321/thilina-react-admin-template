import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar-slice";
import homeFaqReducer from "./home/faq";
import youMayLikeReducer from "./home/you-may-like";
import bloodStockReducer from "./blood/stocks";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer.reducer,
    homeFaq: homeFaqReducer.reducer,
    homeYouMayLike: youMayLikeReducer.reducer,
    bloodStock: bloodStockReducer.reducer,
  },
});

export default store;
