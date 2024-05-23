import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: "products",
	initialState: [],
	reducers: {
		addAllProducts: (state, action) => {
			state.length = 0;
			action.payload.forEach((item) => {
				item.pressed = false;
				state.push(item);
			});
		},
		addProduct: (state, action) => {
			const newProduct = {
				id: action.payload.id,
				name: action.payload.name,
				price: action.payload.price,
				description: action.payload.description,
				image: action.payload.image,
				pressed: false,
			};
			state.push(newProduct);
		},
		removeAllProducts: (state, action) => {
			if (state.length != 0) {
				state.length = action.payload.length;
			}
		},
		handlePressed: (state, action) => {
			state.forEach((product) => {
				if (product.id === action.payload.id) {
					product.pressed = !product.pressed;
					return;
				}
			});
		},
		deleteProduct: (state, action) => {
			state = state.filter((item) => item.id != action.payload.id);
		},
		deleteAllProducts: (state, action) => {
			action.payload.forEach((product) => {
				state = state.filter((item) => item.id != product.id);
			});
		},
	},
});

export const {
	addProduct,
	addAllProducts,
	removeAllProducts,
	handlePressed,
	deleteProduct,
	deleteAllProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
