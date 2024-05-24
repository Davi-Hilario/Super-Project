import Utils from "@/src/utils/Utils";
import styles from "./UserList.style";
import { useDispatch } from "react-redux";
import { useNavigation } from "expo-router";
import { colors } from "@/src/styles/colors";
import { UserData } from "@/src/types/types";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { handlePressed } from "@/src/redux/slices/accountsSlice";

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

	function handlePress(id: number) {
		if (!pressed) {
			navigation.navigate(Utils.screenNames.EDIT_ACCOUNT, { id: id });
		} else {
			dispatch(handlePressed({ id: id }));
		}
	}

	function handleLongPress() {
		dispatch(handlePressed({ id: id }));
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
