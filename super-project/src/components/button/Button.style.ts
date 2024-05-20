import { colors } from "@/src/styles/colors";
import { fontFamily } from "@/src/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	Button: {
		width: "100%",
		height: 60,
		backgroundColor: "#33335f",
		borderRadius: 10,
		display: "flex",
		flexDirection: "row",
		gap: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	btnText: {
		fontSize: 24,
		color: colors.white[200],
		fontFamily: fontFamily.canadaMedium,
	},
});
