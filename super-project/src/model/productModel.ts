import { BASE_URL } from "@env";
import { ProductData } from "../types/types";
import { deleteProduct } from "../redux/slices/productsSlice";

export const ProductModel = {
	createNewProduct: async (data: ProductData): Promise<any> => {
		let result: any = await fetch(`${BASE_URL}/products`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: data.name,
				description: data.description,
				price: data.price,
				image: data.image,
			}),
		});
		let json = await result.json();
		return json;
	},
	findAllProducts: async (): Promise<any> => {
		let result: any = await fetch(`${BASE_URL}/products`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		let json = await result.json();
		return json;
	},
	findProduct: async (id: number): Promise<any> => {
		let result: any = await fetch(`${BASE_URL}/products/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		let json = await result.json();
		return json;
	},
	updateProduct: async (id: number, data: ProductData): Promise<any> => {
		let result: any = await fetch(`${BASE_URL}/products/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: data.name,
				description: data.description,
				price: data.price,
				image: data.image,
			}),
		});
		let json = await result.json();
		return json;
	},
	deleteProduct: async (id: number): Promise<void> => {
		fetch(`${BASE_URL}/products/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => console.error("Error: " + error));
	},
};
