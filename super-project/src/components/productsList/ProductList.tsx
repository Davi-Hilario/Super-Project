import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./ProductList.style";
import { ProductData } from "@/src/types/types";

function ProductList({ id, name, description, price, image }: ProductData) {
	return (
		<TouchableOpacity style={styles.ListItem}>
			<Image source={{ uri: image }} style={styles.image} />
			<Text style={styles.listText}>{name}</Text>
		</TouchableOpacity>
	);
}

export default ProductList;
