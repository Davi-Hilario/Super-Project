import { MaterialIcons } from "@expo/vector-icons";
import styles from "./NavBar.style";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { DATA } from "./utils";
import { ItemData } from "@/src/types/types";
import { colors } from "@/src/styles/colors";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Navbar({ selectedId }: { selectedId: number }) {
	let [active, setActive] = useState(false);
	let [name, setName] = useState("");
	let [email, setEmail] = useState("");

	useEffect(() => {
		AsyncStorage.getItem("email")
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	}, []);

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
					<Image source={{ uri: "https://img.logoipsum.com/243.svg" }} />
					<View>
						<Text style={styles.textUsername}>{}</Text>
						<Text style={styles.textEmail}>{}</Text>
					</View>
					<MaterialIcons name='more-vert' size={30} color={colors.white[200]} />
				</View>
			</View>
		</View>
	);
}

export default Navbar;
