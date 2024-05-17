import styles from "./css/manageAccounts.style";
import Navbar from "../components/navbar/NavBar";
import { View } from "react-native";

function ManageAccounts() {
	return (
		<View style={styles.ManageAccounts}>
			<Navbar selectedId={5} />
		</View>
	);
}

export default ManageAccounts;
