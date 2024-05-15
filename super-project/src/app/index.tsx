import { Text, View } from "react-native";
import styles from "./css/index.style";
import Input from "../components/input/Input";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../components/button/Button";
import { Link } from "expo-router";

function Home() {
	return (
		<View style={styles.Home}>
			<View style={styles.container}>
				<Text style={styles.text} className='font-canadaBold text-blue-900'>
					Login
				</Text>
				<View style={styles.inputArea}>
					<Input>
						<Input.Field placeholder='Email' />
						<MaterialIcons name='email' size={30} color={"#33335f"} />
					</Input>
					<Input>
						<Input.Field placeholder='Password' />
						<MaterialIcons name='lock' size={30} color={"#33335f"} />
					</Input>
				</View>
				<Button value='Sign In' onPress={() => console.log("Logando...")} />
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
