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
		alignItems: "center",
		justifyContent: "space-evenly",
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
	info: {
		backgroundColor: colors.white[100],
		borderRadius: 10,
		width: "100%",
		height: "70%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
	},
	infoContainer: {
		width: "95%",
		height: "90%",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-evenly",
	},
	infoTitle: {
		fontWeight: "bold",
		fontSize: 40,
	},
	infoText: {
		fontWeight: "medium",
		fontSize: 25,
	},
});

export default styles;
