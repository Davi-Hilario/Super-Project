import Utils from "../utils/Utils";
import { colors } from "../styles/colors";
import { UserData } from "../types/types";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import styles from "./css/editAccount.style";
import Input from "../components/input/Input";
import { userModel } from "../model/userModel";
import Navbar from "../components/navbar/NavBar";
import Button from "../components/button/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import Selectbox from "../components/picker/SelectBox";
import { Alert, Image, Text, View } from "react-native";

function EditAccount() {
	let [username, setUsername] = useState<string | undefined>("");
	let [role, setRole] = useState<number | undefined>();
	let [email, setEmail] = useState<string | undefined>("");
	let [password, setPassword] = useState<string | undefined>("");
	let [imageUrl, setImageUrl] = useState<string | undefined>("");

	const route = useRoute<any>();
	const { id } = route.params;
	const navigation = useNavigation<any>();

	useEffect(() => {
		async function loadData() {
			let data: UserData = await userModel.findUser(id);
			setUsername(data.name);
			setRole(data.role);
			setEmail(data.email);
			setPassword(data.password);
			setImageUrl(data.image);
		}
		loadData();
	}, []);

	function handleButtonPress() {
		async function loadData() {
			let data = await userModel.updateUser(id, {
				name: username,
				role: Number(role),
				email: email,
				password: password,
				image: imageUrl,
			});

			if (!data.error) {
				Alert.alert("Success!", "The account was updated!");
				navigation.navigate(Utils.screenNames.MANAGE_ACCOUNTS);
			} else {
				Alert.alert(
					"Error: " + data.error,
					"Error in updating the user account!"
				);
			}
		}
		loadData();
	}

	return (
		<View style={styles.EditProduct}>
			<Navbar selectedId={5} />
			<View style={styles.contentArea}>
				<Text style={styles.title}>EDIT ACCOUNT</Text>
				<View style={styles.form}>
					<Input>
						<Input.Field
							value={username}
							placeholder='Username'
							onChangeText={setUsername}
						/>
						<MaterialIcons name='person-4' size={30} color={colors.blue[900]} />
					</Input>
					<Selectbox
						items={[
							{ label: "Client", value: 0 },
							{ label: "Admin", value: 1 },
						]}
						onChangeValue={(value) => {
							console.log(value);
							setRole(value);
						}}
						selectedValue={role}
					/>
					<Input>
						<Input.Field
							value={email}
							placeholder='User Email'
							onChangeText={setEmail}
						/>
						<MaterialIcons name='email' size={30} color={colors.blue[900]} />
					</Input>
					<Input>
						<Input.Field
							value={password}
							placeholder='User Password'
							keyboardType='visible-password'
							onChangeText={setPassword}
						/>
						<MaterialIcons name='password' size={30} color={colors.blue[900]} />
					</Input>
					<Input>
						<Input.Field
							value={imageUrl}
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
					<Button value='Edit account' onPress={handleButtonPress} />
				</View>
			</View>
		</View>
	);
}

export default EditAccount;
