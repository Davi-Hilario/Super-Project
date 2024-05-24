import { BASE_URL } from "@env";
import { UserData } from "../types/types";

export const userModel = {
	createNewAccount: async (data: UserData): Promise<any> => {
		let result: any = await fetch(`${BASE_URL}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: data.name,
				role: data.role,
				email: data.email,
				password: data.password,
				image: data.image,
			}),
		});
		let json = await result.json();
		return json;
	},
	login: async (data: UserData): Promise<any> => {
		let result: any = await fetch(`${BASE_URL}/users/login-by-role`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: data.email,
				password: data.password,
				role: 1,
			}),
		});
		let json = await result.json();
		return json;
	},
	findAllUsers: async (): Promise<any> => {
		let result: any = await fetch(`${BASE_URL}/users`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		let json = await result.json();
		return json;
	},
	findUser: async (id: number): Promise<any> => {
		let result: any = await fetch(`${BASE_URL}/users/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		let json = await result.json();
		return json;
	},
	updateUser: async (id: number, data: UserData): Promise<any> => {
		let result: any = await fetch(`${BASE_URL}/users/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: data.name,
				role: data.role,
				email: data.email,
				password: data.password,
				image: data.image,
			}),
		});
		let json = await result.json();
		return json;
	},
	deleteAccount: async (id: number): Promise<void> => {
		fetch(`${BASE_URL}/users/${id}`, {
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
