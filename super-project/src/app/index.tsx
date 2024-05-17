import { Alert, Text, View } from "react-native";
import styles from "./css/index.style";
import Input from "../components/input/Input";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../components/button/Button";
import { Link, useNavigation } from "expo-router";
import { useState } from "react";
import Utils from "../utils/Utils";

function Home() {
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");
	let navigation = useNavigation<any>();

	function handleSubmit() {
		if (!email.trim() || !password.trim()) {
			return Alert.alert(
				"Failed to Sign In",
				"Fill all the required fields to proceed!"
			);
		}

		fetch("http://localhost:8080/users/login-admin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
			.then((response) => {
				if (response.ok) {
					response.json().then((json) => {
						if (json.role === 1) {
							Alert.alert("Login", "Signed In sucessfully!");
							navigation.navigate(Utils.screenNames.HOME);
						}
					});
				} else {
					response.text().then((text) => {
						Alert.alert(`Error ${response.status}`, text);
					});
				}
			})
			.catch((error) => {
				Alert.alert("Server Error", `Error while trying to login: ${error}`);
			});
	}

	return (
		<View style={styles.Home}>
			<View style={styles.container}>
				<Text style={styles.text} className='font-canadaBold text-blue-900'>
					Login
				</Text>
				<View style={styles.inputArea}>
					<Input>
						<Input.Field placeholder='Email' onChangeText={setEmail} />
						<MaterialIcons name='email' size={30} color={"#33335f"} />
					</Input>
					<Input>
						<Input.Field placeholder='Password' onChangeText={setPassword} />
						<MaterialIcons name='lock' size={30} color={"#33335f"} />
					</Input>
				</View>
				<Button value='Sign In' onPress={handleSubmit} />
				<View style={styles.linkArea}>
					<Text
						className='font-canadaRegular text-blue-900'
						style={styles.linkText}
					>
						Do not have an account yet?
					</Text>
					<Link
						href={"/register"}
						style={styles.link}
						className='font-canadaBold text-blue-500'
					>
						Register here!
					</Link>
				</View>
			</View>
		</View>
	);
}

export default Home;
