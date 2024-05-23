import { StatusBar, StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";
import { fontFamily } from "@/src/styles/fontFamily";

const styles = StyleSheet.create({
	ManageProducts: {
		marginTop: StatusBar.currentHeight,
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		gap: 20,
		backgroundColor: colors.white[200],
		fontFamily: fontFamily.canadaRegular,
	},
	optionsArea: {
		marginTop: "20%",
		width: "100%",
		height: "30%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	buttonsArea: {
		width: "95%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
	},
	deleteProductsArea: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		height: "20%",
		justifyContent: "space-between",
		alignItems: "center",
	},
	productsArea: {
		width: "100%",
		height: "100%",
	},
	btnFragment: {
		width: "49%",
	},
});

export default styles;
