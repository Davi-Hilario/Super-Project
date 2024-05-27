import styles from "./css/profile.style";
import { Image, ScrollView, View } from "react-native";
import Navbar from "../components/navbar/NavBar";

function Profile() {
	return (
		<View style={styles.Profile}>
			<Navbar selectedId={2} />
			<ScrollView style={styles.main}></ScrollView>
		</View>
	);
}

export default Profile;
