import Utils from "../utils/Utils";
import { Alert } from "react-native";
import styles from "./css/register.style";
import { Text, View } from "react-native";
import { useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { Link, useNavigation } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

function Home() {
	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");
	let navigation = useNavigation<any>();

	function handleSubmit() {
		if (!name.trim() || !email.trim() || !password.trim()) {
			return Alert.alert(
				"Failed to create an account",
				"Fill the required field to proceed!"
			);
		}

		Alert.alert("Success!", "Account created succesfully!");
		navigation.navigate(Utils.screenNames.LOGIN);
	}

	return (
		<View style={styles.Register}>
			<View style={styles.container}>
				<Text style={styles.text} className='font-canadaBold text-blue-900'>
					Register
				</Text>
				<View style={styles.inputArea}>
					<Input>
						<Input.Field placeholder='Name' onChangeText={setName} />
						<MaterialIcons name='person' size={30} color={"#33335f"} />
					</Input>
					<Input>
						<Input.Field
							placeholder='Email'
							keyboardType='email-address'
							onChangeText={setEmail}
						/>
						<MaterialIcons name='email' size={30} color={"#33335f"} />
					</Input>
					<Input>
						<Input.Field
							placeholder='Password'
							keyboardType='visible-password'
							onChangeText={setPassword}
						/>
						<MaterialIcons name='lock' size={30} color={"#33335f"} />
					</Input>
				</View>
				<Button value='Register' onPress={handleSubmit} />
				<View style={styles.linkArea}>
					<Text
						className='font-canadaRegular text-blue-900'
						style={styles.linkText}
					>
						Already have an account?
					</Text>
					<Link
						href={"/"}
						style={styles.link}
						className='font-canadaBold text-blue-500'
					>
						Login Now!
					</Link>
				</View>
			</View>
		</View>
	);
}

export default Home;
