import { BASE_URL } from "@env";
import { useEffect } from "react";
import styles from "./css/manageAccounts.style";
import Navbar from "../components/navbar/NavBar";
import { Alert, View } from "react-native";

function ManageAccounts() {
	useEffect(() => {
		fetch(`${BASE_URL}/users`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (response.ok) {
					response.json().then((json) => {
						console.log(json);
					});
				} else {
					response.text().then((text) => {
						Alert.alert(`Error ${response.status}, ${text}`);
					});
				}
			})
			.catch((error) => {
				Alert.alert("Server Error", `Error while trying to get data: ${error}`);
			});
	}, []);

	return (
		<View style={styles.ManageAccounts}>
			<Navbar selectedId={5} />
		</View>
	);
}

export default ManageAccounts;
