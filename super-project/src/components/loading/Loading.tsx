import { ActivityIndicator } from "react-native";
import styles from "./Loading.style";

function Loading() {
	return (
		<ActivityIndicator style={styles.Loader} size='large'></ActivityIndicator>
	);
}

export default Loading;
