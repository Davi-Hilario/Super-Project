import Utils from "@/src/utils/Utils";
import styles from "./UserList.style";
import { useDispatch } from "react-redux";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { colors } from "@/src/styles/colors";
import { UserData } from "@/src/types/types";
import { userModel } from "@/src/model/userModel";
import { handlePressed } from "@/src/redux/slices/accountsSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

function UserList({
	id,
	name,
	role,
	email,
	password,
	image,
	pressed,
}: UserData) {
	const navigation = useNavigation<any>();
	const dispatch = useDispatch();

	let [loggedUser, setLoggedUser] = useState<UserData>();

	const syncUser = async () => {
		let id = await AsyncStorage.getItem("id");
		setLoggedUser(await userModel.findUser(Number(id)));
	};

	useEffect(() => {
		syncUser();
	}, []);

	function handlePress(id: number) {
		if (!pressed) {
			if (loggedUser?.id === id) {
				Alert.alert("Warning!", "You can't update/delete your own account!");
			} else {
				navigation.navigate(Utils.screenNames.EDIT_ACCOUNT, { id: id });
			}
		} else {
			if (loggedUser?.id === id) {
				Alert.alert("Warning!", "You can't update/delete your own account!");
			} else {
				dispatch(handlePressed({ id: id }));
			}
		}
	}

	function handleLongPress() {
		if (loggedUser?.id === id) {
			Alert.alert("Warning!", "You can't update/delete your own account!");
		} else {
			dispatch(handlePressed({ id: id }));
		}
	}

	return (
		<TouchableOpacity
			style={[
				styles.ListItem,
				{ backgroundColor: pressed ? colors.blue[500] : "lightgray" },
			]}
			onPress={() => handlePress(Number(id))}
			onLongPress={handleLongPress}
		>
			<Image source={{ uri: image }} style={styles.image} />
			<View style={styles.contentSection}>
				<Text
					style={[
						styles.listTitle,
						{ color: pressed ? colors.white[200] : colors.blue[900] },
					]}
				>
					{name}
				</Text>
				<Text
					style={[
						styles.listRole,
						{ color: pressed ? colors.white[200] : colors.blue[900] },
					]}
				>
					{role === 1 ? "Admin" : "Client"}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

export default UserList;
