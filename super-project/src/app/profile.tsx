import styles from "./css/profile.style";
import { colors } from "../styles/colors";
import { UserData } from "../types/types";
import { useEffect, useState } from "react";
import { userModel } from "../model/userModel";
import Toast from "react-native-toast-message";
import Navbar from "../components/navbar/NavBar";
import Button from "../components/button/Button";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Profile() {
	let [id, setId] = useState<number | undefined>();
	let [name, setName] = useState<string | undefined>();
	let [email, setEmail] = useState<string | undefined>();
	let [role, setRole] = useState<number | undefined>();
	let [password, setPassword] = useState<string | undefined>();
	let [image, setImage] = useState<string | undefined>();
	let [imageChanged, setImageChange] = useState<boolean>(false);

	useEffect(() => {
		(async function getData() {
			try {
				let id = Number(await AsyncStorage.getItem("id"));
				let data = await userModel.findUser(id);

				if (data.error) {
					return Toast.show({
						type: "error",
						text1: `Error: ${data.error}`,
						text2: "Failed to find user",
					});
				}

				setId(id);
				setName(data.name);
				setEmail(data.email);
				setRole(data.role);
				setPassword(data.password);
				setImage(data.image);
			} catch (error: any) {
				Toast.show({
					type: "error",
					text1: "Failed to Load Data",
					text2: error,
				});
			}
		})();
	}, []);

	async function handleSelectImage() {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [4, 4],
			});

			if (result.assets) {
				setImage(result.assets[0].uri);
				setImageChange(true);
			}
		} catch (error: any) {
			Toast.show({
				type: "error",
				text1: "Failed to Launch Image Picker",
				text2: error,
			});
		}
	}

	async function handleChangeImage() {
		try {
			let data: UserData = await userModel.changeImage(
				id as number,
				image as string
			);
			AsyncStorage.setItem("image", data.image as string);
			setImageChange(false);
			Toast.show({
				type: "success",
				text1: "Success",
				text2: "Profile image updated!",
			});
		} catch (error: any) {
			Toast.show({
				type: "error",
				text1: "Failed to Change Image",
				text2: error,
			});
		}
	}

	return (
		<View style={styles.Profile}>
			<Navbar selectedId={2} />
			<View style={styles.container}>
				<TouchableOpacity
					style={[styles.imageArea, { height: imageChanged ? 300 : 175 }]}
					activeOpacity={0.7}
					onPress={handleSelectImage}
				>
					<View
						style={[
							styles.selectImage,
							{ display: image === null ? "flex" : "none" },
						]}
					>
						<MaterialIcons
							name='add-photo-alternate'
							size={80}
							color={colors.white[200]}
						/>
					</View>
					<Image
						source={{ uri: image }}
						style={[
							styles.profileImage,
							{ display: image === null ? "none" : "flex" },
						]}
					/>
					<View style={{ display: imageChanged ? "flex" : "none" }}>
						<Button value='Save' onPress={handleChangeImage} />
					</View>
				</TouchableOpacity>
				<View style={styles.info}>
					<View style={styles.infoContainer}>
						<Text style={styles.infoTitle}>Your Info</Text>
						<Text style={styles.infoText}>Name: {name}</Text>
						<Text style={styles.infoText}>Email: {email}</Text>
						<Text style={styles.infoText}>
							Role: {role == 0 ? "Client" : "Admin"}
						</Text>
						<Text style={styles.infoText}>Password: {password}</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

export default Profile;
