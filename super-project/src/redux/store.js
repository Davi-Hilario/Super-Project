import productReducer from "./slices/productsSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	products: productReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
