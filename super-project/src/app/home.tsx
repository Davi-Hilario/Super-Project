import { Text, View } from "react-native";
import styles from "./css/home.style";
import Navbar from "../components/sidebar/SideBar";

function Home() {
	return (
		<View style={styles.Home}>
			<Navbar />
			<View>
				<Text>Teste</Text>
			</View>
		</View>
	);
}

export default Home;
