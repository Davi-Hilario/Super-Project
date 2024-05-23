import { BASE_URL } from "@env";
import { UserData } from "../types/types";
import { Alert } from "react-native";

export const userModel = {
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
};
