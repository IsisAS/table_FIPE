import { configureStore } from "@reduxjs/toolkit";
import search from "./search/search-slice";

const store = configureStore({
  reducer: {
    search: search,
  },
});

export default store;
