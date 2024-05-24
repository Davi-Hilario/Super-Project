import { createSlice } from "@reduxjs/toolkit";

const accountsSlice = createSlice({
	name: "accounts",
	initialState: [],
	reducers: {
		addAllAccounts: (state, action) => {
			state.length = 0;
			action.payload.forEach((item) => {
				item.pressed = false;
				state.push(item);
			});
		},
		addAccount: (state, action) => {
			const newProduct = {
				id: action.payload.id,
				username: action.payload.name,
				role: action.payload.role,
				email: action.payload.email,
				password: action.payload.password,
				image: action.payload.image,
				pressed: false,
			};
			state.push(newProduct);
		},
		removeAllAccounts: (state, action) => {
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
		pressAll: (state, action) => {
			state.forEach((item) => {
				action.payload.data.forEach((product) => {
					if (item.id === product.id) {
						item.pressed = action.payload.isPressed;
					}
				});
			});
		},
		deleteAccount: (state, action) => {
			state = state.filter((item) => item.id != action.payload.id);
		},
		deleteAllAccounts: (state, action) => {
			action.payload.forEach((product) => {
				state = state.filter((item) => item.id != product.id);
			});
		},
	},
});

export const {
	pressAll,
	addAccount,
	deleteAccount,
	handlePressed,
	addAllAccounts,
	removeAllAccounts,
	deleteAllAccounts,
} = accountsSlice.actions;

export default accountsSlice.reducer;
