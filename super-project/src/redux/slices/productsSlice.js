import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: "products",
	initialState: [],
	reducers: {
		addAllProducts: (state, action) => {
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
	},
});

export const { addAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
