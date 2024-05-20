import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./ProductList.style";
import { ProductData } from "@/src/types/types";

function ProductList({ id, name, description, price, image }: ProductData) {
	return (
		<TouchableOpacity style={styles.ListItem}>
			<Image source={{ uri: image }} style={styles.image} />
			<View style={styles.contentSection}>
				<Text style={styles.listTitle}>{name}</Text>
				<Text style={styles.listDescription}>{description}</Text>
			</View>
		</TouchableOpacity>
	);
}

export default ProductList;
