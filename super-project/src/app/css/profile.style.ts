import { colors } from "@/src/styles/colors";
import { fontFamily } from "@/src/styles/fontFamily";
import { StatusBar, StyleSheet } from "react-native";

let styles = StyleSheet.create({
	Profile: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
		backgroundColor: colors.white[200],
		flexDirection: "column",
	},
	container: {
		width: "95%",
		height: "85%",
		display: "flex",
		flexDirection: "column",
		alignSelf: "center",
		marginTop: "20%",
	},
	imageArea: {
		display: "flex",
		flexDirection: "column",
		gap: 20,
		height: 300,
		width: 175,
	},
	profileImage: {
		borderRadius: 100,
		height: 175,
		width: 175,
	},
	selectImage: {
		borderRadius: 100,
		height: 175,
		width: 175,
		backgroundColor: colors.blue[500],
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	info: {},
});

export default styles;
