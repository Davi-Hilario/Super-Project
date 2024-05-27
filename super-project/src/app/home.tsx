import Utils from "../utils/Utils";
import styles from "./css/home.style";
import { Text, View } from "react-native";
import { useNavigation } from "expo-router";
import Navbar from "../components/navbar/NavBar";
import BigButton from "../components/bigbutton/BigButton";

function Home() {
	const navigation = useNavigation<any>();

	return (
		<View style={styles.Home}>
			<Navbar selectedId={1} />
			<View style={styles.container}>
				<Text style={styles.title}>Super Project</Text>
				<Text style={styles.subtitle}>Select an option</Text>
				<View style={styles.cardLine}>
					<BigButton
						icon={"manage-accounts"}
						text='Manage Accounts'
						onClick={() =>
							navigation.navigate(Utils.screenNames.MANAGE_ACCOUNTS)
						}
					/>
					<BigButton
						icon={"inventory"}
						text='Manage Products'
						onClick={() =>
							navigation.navigate(Utils.screenNames.MANAGE_PRODUCTS)
						}
					/>
				</View>
			</View>
		</View>
	);
}

export default Home;
