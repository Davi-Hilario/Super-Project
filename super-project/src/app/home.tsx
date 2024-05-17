import { Text, View } from "react-native";
import styles from "./css/home.style";
import Navbar from "../components/navbar/NavBar";

function Home() {
	return (
		<View style={styles.Home}>
			<Navbar selectedId={1} />
			<View style={styles.container}>
				<Text>Teste</Text>
			</View>
		</View>
	);
}

export default Home;
