import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";
import { fontFamily } from "@/src/styles/fontFamily";

const styles = StyleSheet.create({
	card: {
		width: 175,
		height: 175,
		borderRadius: 10,
		backgroundColor: colors.blue[500],
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 20,
	},
	cardText: {
		fontSize: 16,
		color: colors.white[200],
		fontFamily: fontFamily.canadaMedium,
	},
});

export default styles;
