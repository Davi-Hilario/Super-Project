import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./ProductList.style";
import { ProductData } from "@/src/types/types";
import { ProductModel } from "@/src/model/productModel";
import { useNavigation } from "expo-router";
import Utils from "@/src/utils/Utils";

function ProductList({ id, name, description, price, image }: ProductData) {
	const navigation = useNavigation<any>();

	function handlePress(id: number) {
		navigation.navigate(Utils.screenNames.EDIT_PRODUCT, { id: id });
	}

	return (
		<TouchableOpacity
			style={styles.ListItem}
			onPress={() => handlePress(Number(id))}
		>
			<Image source={{ uri: image }} style={styles.image} />
			<View style={styles.contentSection}>
				<Text style={styles.listTitle}>{name}</Text>
				<Text style={styles.listDescription}>{description}</Text>
			</View>
		</TouchableOpacity>
	);
}

export default ProductList;
