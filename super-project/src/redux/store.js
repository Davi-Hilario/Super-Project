import productReducer from "./slices/productsSlice";
import accountReducer from "./slices/accountsSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	products: productReducer,
	accounts: accountReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
