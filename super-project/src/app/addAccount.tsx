import { useState } from "react";
import Utils from "../utils/Utils";
import { useDispatch } from "react-redux";
import { colors } from "../styles/colors";
import { useNavigation } from "expo-router";
import styles from "./css/addAccount.style";
import Input from "../components/input/Input";
import { userModel } from "../model/userModel";
import Navbar from "../components/navbar/NavBar";
import Button from "../components/button/Button";
import { MaterialIcons } from "@expo/vector-icons";
import Selectbox from "../components/picker/SelectBox";
import { Alert, Image, Text, View } from "react-native";
import { addAccount as addNewAccount } from "../redux/slices/accountsSlice";

function addAccount() {
	let [username, setUsername] = useState<string | undefined>("");
	let [role, setRole] = useState<number | undefined>();
	let [email, setEmail] = useState<string | undefined>("");
	let [password, setPassword] = useState<string | undefined>("");
	let [imageUrl, setImageUrl] = useState<string | undefined>("");

	const dispatch = useDispatch();
	const navigation = useNavigation<any>();

	function handleButtonPress() {
		async function loadData() {
			let data = await userModel.createNewAccount({
				name: username,
				role: Number(role),
				email: email,
				password: password,
				image: imageUrl,
			});

			if (!data.error) {
				dispatch(addNewAccount(data));
				Alert.alert("Success!", "New account created with success!");
				navigation.navigate(Utils.screenNames.MANAGE_ACCOUNTS);
			} else {
				Alert.alert("Error: " + data.error, "Error in creating the account!");
			}
		}
		loadData();
	}

	return (
		<View style={styles.AddNewItem}>
			<Navbar selectedId={5} />
			<View style={styles.contentArea}>
				<Text style={styles.title}>ADD A NEW ACCOUNT</Text>
				<View style={styles.form}>
					<Input>
						<Input.Field placeholder='Username' onChangeText={setUsername} />
						<MaterialIcons name='person-4' size={30} color={colors.blue[900]} />
					</Input>
					<Selectbox
						items={[
							{ label: "Client", value: 0 },
							{ label: "Admin", value: 1 },
						]}
						onChangeValue={(value) => {
							setRole(value);
						}}
					/>
					<Input>
						<Input.Field placeholder='User Email' onChangeText={setEmail} />
						<MaterialIcons name='email' size={30} color={colors.blue[900]} />
					</Input>
					<Input>
						<Input.Field
							placeholder='User Password'
							keyboardType='visible-password'
							onChangeText={setPassword}
						/>
						<MaterialIcons name='password' size={30} color={colors.blue[900]} />
					</Input>
					<Input>
						<Input.Field
							placeholder='Account image url'
							onChangeText={setImageUrl}
						/>
						<MaterialIcons name='link' size={30} color={colors.blue[900]} />
					</Input>
					<Image
						source={{ uri: imageUrl }}
						alt={username}
						style={styles.image}
					/>
					<Button value='Add account' onPress={handleButtonPress} />
				</View>
			</View>
		</View>
	);
}

export default addAccount;
