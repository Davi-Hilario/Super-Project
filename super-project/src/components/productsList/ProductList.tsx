import Utils from "@/src/utils/Utils";
import styles from "./ProductList.style";
import { useDispatch } from "react-redux";
import { useNavigation } from "expo-router";
import { colors } from "@/src/styles/colors";
import { ProductData } from "@/src/types/types";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { handlePressed } from "@/src/redux/slices/productsSlice";

function ProductList({ id, name, description, image, pressed }: ProductData) {
	const navigation = useNavigation<any>();
	const dispatch = useDispatch();

	function handlePress(id: number) {
		if (!pressed) {
			navigation.navigate(Utils.screenNames.EDIT_PRODUCT, { id: id });
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
						styles.listDescription,
						{ color: pressed ? colors.white[200] : colors.blue[900] },
					]}
				>
					{description}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

export default ProductList;
