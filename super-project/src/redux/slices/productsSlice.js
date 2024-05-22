import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: "products",
	initialState: [],
	reducers: {
		addAllProducts: (state, action) => {
			state.length = 0;
			action.payload.forEach((item) => state.push(item));
		},
		addProduct: (state, action) => {
			const newProduct = {
				id: action.payload.id,
				name: action.payload.name,
				price: action.payload.price,
				description: action.payload.description,
				image: action.payload.image,
				isSelected: false,
			};
			state.push(newProduct);
		},
		removeAllProducts: (state, action) => {
			if (state.length != 0) {
				state.length = action.payload.length;
			}
		},
	},
});

export const { addProduct, addAllProducts, removeAllProducts } =
	productsSlice.actions;

export default productsSlice.reducer;
