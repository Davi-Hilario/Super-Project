import { colors } from "@/src/styles/colors";
import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	Home: {
		flex: 1,
		backgroundColor: colors.white[200],
		flexDirection: "column",
	},
	container: {
		width: "95%",
		height: "85%",
		display: "flex",
		flexDirection: "column",
		alignSelf: "center",
		marginTop: "15%",
	},
});

export default styles;
