import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

const styles = StyleSheet.create({
	Searchbar: {
		display: "flex",
		flexDirection: "row",
		width: "95%",
		height: "30%",
		borderColor: colors.blue[500],
		borderWidth: 1,
		borderRadius: 10,
		borderStyle: "solid",
	},
	searchIconArea: {
		width: "20%",
		backgroundColor: colors.blue[500],
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	textInputArea: {
		width: "80%",
		height: "100%",
	},
	textInput: {
		width: "100%",
		height: "100%",
		paddingLeft: 10,
	},
});

export default styles;
