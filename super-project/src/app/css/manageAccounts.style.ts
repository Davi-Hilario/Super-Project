import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";
import { fontFamily } from "@/src/styles/fontFamily";

const styles = StyleSheet.create({
	ManageAccounts: {
		flex: 1,
		backgroundColor: colors.white[200],
		fontFamily: fontFamily.canadaRegular,
		flexDirection: "column",
	},
});

export default styles;
