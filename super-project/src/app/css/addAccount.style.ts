import { colors } from "@/src/styles/colors";
import { fontFamily } from "@/src/styles/fontFamily";
import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	AddNewItem: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: colors.white[200],
		fontFamily: fontFamily.canadaRegular,
	},
	contentArea: {
		marginTop: "20%",
		width: "100%",
		height: "90%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	title: {
		fontFamily: fontFamily.canadaBold,
		fontSize: 32,
		textAlign: "left",
	},
	form: {
		width: "90%",
		height: "90%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	image: {
		width: 175,
		height: 175,
	},
});

export default styles;
