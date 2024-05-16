import { colors } from "@/src/styles/colors";
import { fontFamily } from "@/src/styles/fontFamily";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

const styles = StyleSheet.create({
	Sidebar: {
		height: "85%",
		width: "75%",
	},
	container: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		backgroundColor: colors.white[200],
		borderStyle: "solid",
		borderRightWidth: 1,
		borderRightColor: "#d2d2d2",
	},
	item: {
		width: "90%",
		height: 80,
		display: "flex",
		flexDirection: "row",
		padding: 10,
		justifyContent: "space-between",
		alignItems: "center",
		fontFamily: fontFamily.canadaMedium,
		borderRadius: 15,
		marginTop: 5,
	},
	sideBarFooter: {
		height: "15%",
		paddingRight: 10,
		paddingLeft: 10,
		paddingBottom: 20,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: colors.blue[500],
	},
	textUsername: {
		color: colors.white[200],
		fontFamily: fontFamily.canadaBold,
		fontSize: 20,
	},
	textEmail: {
		color: colors.white[200],
		fontFamily: fontFamily.canadaRegular,
	},
	Navbar: {
		marginTop: StatusBar.currentHeight || 0,
		paddingRight: 10,
		paddingLeft: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: colors.blue[500],
	},
	logoImg: {
		width: 100,
		height: 100,
	},
});

export default styles;
