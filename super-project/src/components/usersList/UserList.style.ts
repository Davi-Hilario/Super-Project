import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";
import { fontFamily } from "@/src/styles/fontFamily";

const styles = StyleSheet.create({
	ListItem: {
		width: "95%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10,
		marginBottom: 10,
		borderRadius: 10,
		backgroundColor: "lightgray",
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 10,
	},
	contentSection: {
		display: "flex",
		flexDirection: "column",
		width: "73%",
		height: "100%",
	},
	listTitle: {
		textAlign: "left",
		fontSize: 16,
		width: "100%",
		color: colors.blue[900],
		fontFamily: fontFamily.canadaBold,
	},
	listRole: {
		textAlign: "left",
		fontSize: 16,
		width: "100%",
		color: colors.blue[900],
		fontFamily: fontFamily.canadaMedium,
	},
});

export default styles;
