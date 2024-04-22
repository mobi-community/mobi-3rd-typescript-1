import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slice";

const store = configureStore({
    reducer: countReducer,
});

export default store;
