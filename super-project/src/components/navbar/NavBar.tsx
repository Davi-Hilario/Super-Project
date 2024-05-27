import { DATA } from "./utils";
import styles from "./NavBar.style";
import Button from "../button/Button";
import Utils from "@/src/utils/Utils";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { ItemData } from "@/src/types/types";
import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
	Alert,
	FlatList,
	Image,
	Modal,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

function Navbar({ selectedId }: { selectedId: number }) {
	let [active, setActive] = useState(false);

	return (
		<View style={styles.Layout}>
			<View style={styles.Navbar}>
				<MaterialIcons
					name='menu'
					size={30}
					onPress={() => setActive(!active)}
				/>
			</View>
			<SideBar active={active} selectedId={selectedId} />
		</View>
	);
}

function SideBar({
	active,
	selectedId,
}: {
	active: boolean;
	selectedId: number;
}) {
	let navigation = useNavigation<any>();

	const Item = ({
		item,
		icon,
		backgroundColor,
		foregroundColor,
	}: {
		item: ItemData;
		icon: any;
		backgroundColor: string;
		foregroundColor: string;
	}) => (
		<TouchableOpacity
			style={[styles.item, { backgroundColor: backgroundColor }]}
			onPress={() => navigation.navigate(item.navigationUrl)}
		>
			<Text style={{ color: foregroundColor }}>{item.title}</Text>
			<MaterialIcons name={icon} size={30} color={foregroundColor} />
		</TouchableOpacity>
	);

	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [image, setImage] = useState<string | null>(null);
	let [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		AsyncStorage.getItem("name")
			.then((data) => setName(data as string))
			.catch((error) => console.log(error));

		AsyncStorage.getItem("email")
			.then((data) => setEmail(data as string))
			.catch((error) => console.log(error));

		AsyncStorage.getItem("image")
			.then((data) => setImage(data as string))
			.catch((error) => console.log(error));
	}, []);

	const renderItem = ({ item }: { item: ItemData }) => {
		const backgroundColor =
			selectedId === item.id ? colors.blue[500] : colors.white[200];
		const foregroundColor =
			selectedId === item.id ? colors.white[200] : colors.blue[900];

		return (
			<Item
				item={item}
				icon={item.icon}
				backgroundColor={backgroundColor}
				foregroundColor={foregroundColor}
			/>
		);
	};

	return (
		<View style={[styles.Sidebar, { display: active ? "flex" : "none" }]}>
			<View style={styles.container}>
				<FlatList
					data={DATA}
					renderItem={renderItem}
					contentContainerStyle={{ alignItems: "center" }}
				></FlatList>
				<View style={styles.sideBarFooter}>
					<Image source={{ uri: image as string }} style={styles.userImage} />
					<View>
						<Text style={styles.textUsername}>{name}</Text>
						<Text style={styles.textEmail}>{email}</Text>
					</View>
					<MaterialIcons
						name='more-vert'
						size={30}
						color={colors.white[200]}
						onPress={() => setIsModalVisible(true)}
					/>
				</View>
			</View>
			<Modal
				visible={isModalVisible}
				onRequestClose={() => setIsModalVisible(false)}
				animationType='fade'
				transparent={true}
			>
				<TouchableOpacity
					style={styles.modal}
					onPress={() => setIsModalVisible(false)}
				>
					<View style={styles.modalBtnArea}>
						<Text style={styles.modalTitle}>Logout?</Text>
						<Button
							value='Logout'
							onPress={() =>
								AsyncStorage.clear()
									.then(() => {
										Alert.alert("Logout", "Bye :)");
										navigation.navigate(Utils.screenNames.LOGIN);
									})
									.catch((error) => {
										Alert.alert("Failed to logout: " + error);
									})
							}
						/>
					</View>
				</TouchableOpacity>
			</Modal>
		</View>
	);
}

export default Navbar;
