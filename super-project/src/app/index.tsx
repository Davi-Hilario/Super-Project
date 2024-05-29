import Utils from "../utils/Utils";
import styles from "./css/index.style";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { FUNCTIONS } from "../styles/global";
import Input from "../components/input/Input";
import Toast from "react-native-toast-message";
import { userModel } from "../model/userModel";
import Button from "../components/button/Button";
import { useNavigation } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login() {
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");
	const navigation = useNavigation<any>();

	useEffect(() => {
		async function checkAuthentication() {
			try {
				let data = await FUNCTIONS.validateAuth();
				let route =
					data === null ? Utils.screenNames.LOGIN : Utils.screenNames.HOME;
				navigation.navigate(route);
			} catch (error: any) {
				Toast.show({
					type: "error",
					text1: "Failed to Load Data",
					text2: error,
				});
			}
		}
		checkAuthentication();
	});

	function handleSubmit() {
		if (!email.trim() || !password.trim()) {
			return Toast.show({
				type: "error",
				text1: "Failed to Sign In",
				text2: "Fill the required fields to proceed!",
			});
		}

		async function login() {
			try {
				let data = await userModel.login({ email: email, password: password });

				if (data.error) {
					return Toast.show({
						type: "error",
						text1: `Failed to Sign In: ${data.error}`,
						text2: "Email and/or password are invalid!",
					});
				}

				AsyncStorage.setItem("id", String(data.id));
				AsyncStorage.setItem("name", data.name);
				AsyncStorage.setItem("email", data.email);
				AsyncStorage.setItem("image", data.image);

				Toast.show({
					type: "success",
					text1: "Success",
					text2: "Signed in successfully",
				});

				navigation.navigate(Utils.screenNames.HOME);
			} catch (error: any) {
				Toast.show({
					type: "error",
					text1: "Failed to Sign In",
					text2: error,
				});
			}
		}
		login();
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
			</View>
		</View>
	);
}

export default Login;
