import { View } from "react-native";
import styles from "./css/manageProducts.style";
import Navbar from "../components/navbar/NavBar";

function ManageProducts() {
	return (
		<View style={styles.ManageProducts}>
			<Navbar selectedId={4} />
		</View>
	);
}

export default ManageProducts;
