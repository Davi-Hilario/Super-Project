import styles from "./Loading.style";
import { ActivityIndicator } from "react-native";

function Loading() {
	return (
		<ActivityIndicator style={styles.Loader} size='large'></ActivityIndicator>
	);
}

export default Loading;
