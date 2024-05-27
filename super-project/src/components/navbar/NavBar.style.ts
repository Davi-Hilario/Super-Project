import { colors } from "@/src/styles/colors";
import { fontFamily } from "@/src/styles/fontFamily";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

const styles = StyleSheet.create({
	Layout: {
		position: "absolute",
		width: "75%",
		height: "100%",
	},
	Sidebar: {
		zIndex: 1,
		height: "95%",
		width: "100%",
	},
	container: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		backgroundColor: colors.white[200],
		borderStyle: "solid",
		borderRightWidth: 1,
		borderRightColor: "#d2d2d2",
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
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
	},
	logoImg: {
		width: 100,
		height: 100,
	},
	userImage: {
		width: 80,
		height: 80,
		borderRadius: 10,
	},
	modal: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	modalBtnArea: {
		width: "90%",
		height: "40%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: 30,
		padding: 20,
		alignItems: "center",
		backgroundColor: "#f5f5f5",
		borderWidth: 10,
		borderColor: colors.blue[900],
		borderStyle: "solid",
	},
	modalTitle: {
		fontSize: 50,
	},
});

export default styles;
