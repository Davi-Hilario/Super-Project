import { colors } from "@/src/styles/colors";
import { fontFamily } from "@/src/styles/fontFamily";
import { StyleSheet } from "react-native";

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
		alignItems: "center",
		justifyContent: "center",
		gap: 50,
		marginTop: "15%",
	},
	title: {
		fontSize: 48,
		fontFamily: fontFamily.canadaBold,
	},
	subtitle: {
		fontSize: 24,
		fontFamily: fontFamily.canadaRegular,
	},
	cardLine: {
		display: "flex",
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
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
