import { useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./css/editProduct.style";
import Navbar from "../components/navbar/NavBar";
import { useRoute } from "@react-navigation/native";

function EditProduct() {
	const route = useRoute<any>();
	const { id } = route.params;

	useEffect(() => {}, []);

	return (
		<View style={styles.EditProduct}>
			<Navbar selectedId={4} />
			<Text>Id {id}</Text>
		</View>
	);
}

export default EditProduct;
