import { MaterialIcons } from "@expo/vector-icons";
import styles from "./SideBar.style";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { DATA } from "./utils";
import { ItemData } from "@/src/types/types";
import { colors } from "@/src/styles/colors";
import { useState } from "react";

function Navbar() {
	let [active, setActive] = useState(false);

	return (
		<View>
			<View style={styles.Navbar}>
				<Image
					source={{ uri: "https://img.logoipsum.com/243.svg" }}
					style={styles.logoImg}
				/>
				<MaterialIcons
					name='menu'
					size={30}
					color={colors.white[200]}
					onPress={() => setActive(!active)}
				/>
			</View>
			<SideBar active={active} />
		</View>
	);
}

function SideBar({ active }: { active: boolean }) {
	let [selectedId, setSelectedId] = useState<number>();

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
			onPress={() => setSelectedId(item.id)}
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
						<Text style={styles.textUsername}>Username</Text>
						<Text style={styles.textEmail}>username@gmail.com</Text>
					</View>
					<MaterialIcons name='more-vert' size={30} color={colors.white[200]} />
				</View>
			</View>
		</View>
	);
}

export default Navbar;
