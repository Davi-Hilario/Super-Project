import { BASE_URL } from "@env";
import { ProductData } from "../types/types";

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
};
