import { Text, View } from "react-native";
import styles from "./css/register.style";
import Input from "../components/input/Input";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../components/button/Button";
import { Link } from "expo-router";

function Home() {
	return (
		<View style={styles.Register}>
			<View style={styles.container}>
				<Text style={styles.text} className='font-canadaBold text-blue-900'>
					Register
				</Text>
				<View style={styles.inputArea}>
					<Input>
						<Input.Field placeholder='Username' />
						<MaterialIcons name='person' size={30} color={"#33335f"} />
					</Input>
					<Input>
						<Input.Field placeholder='Email' keyboardType='email-address' />
						<MaterialIcons name='email' size={30} color={"#33335f"} />
					</Input>
					<Input>
						<Input.Field
							placeholder='Password'
							keyboardType='visible-password'
						/>
						<MaterialIcons name='lock' size={30} color={"#33335f"} />
					</Input>
				</View>
				<Button
					value='Register'
					onPress={() => console.log("Registrando...")}
				/>
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
