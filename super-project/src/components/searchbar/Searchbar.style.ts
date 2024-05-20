import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	Searchbar: {
		display: "flex",
		flexDirection: "row",
		width: "90%",
		height: "35%",
		borderColor: colors.blue[500],
		borderWidth: 1,
		borderRadius: 50,
		borderStyle: "solid",
	},
	searchIconArea: {
		width: "20%",
		backgroundColor: colors.blue[500],
		borderTopLeftRadius: 50,
		borderBottomLeftRadius: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	textInputArea: {
		width: "80%",
		height: "100%",
		borderTopRightRadius: 50,
		borderBottomRightRadius: 50,
	},
	textInput: {
		width: "100%",
		height: "100%",
		borderTopRightRadius: 50,
		borderBottomRightRadius: 50,
		paddingLeft: 10,
	},
});

export default styles;
