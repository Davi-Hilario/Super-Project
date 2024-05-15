import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	Register: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#f5f5f5",
	},
	container: {
		flex: 1,
		width: "90%",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 40,
		textTransform: "uppercase",
		alignSelf: "flex-start",
	},
	inputArea: {
		width: "100%",
		height: "40%",
		marginTop: 4,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	linkArea: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 15,
	},
	linkText: {
		fontSize: 16,
	},
	link: {
		marginLeft: 5,
	},
});

export default styles;
