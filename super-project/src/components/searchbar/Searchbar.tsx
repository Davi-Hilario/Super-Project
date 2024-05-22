import { TextInput, View } from "react-native";
import styles from "./Searchbar.style";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";

type Props = {
	placeholder: string;
	onPress: () => void;
	onChangeText: (e: string) => void;
	onBlur: () => void;
};

function Searchbar(props: Props) {
	return (
		<View style={styles.Searchbar}>
			<View style={styles.searchIconArea}>
				<MaterialIcons
					name='search'
					size={40}
					color={colors.white[200]}
					onPress={props.onPress}
				/>
			</View>
			<View style={styles.textInputArea}>
				<TextInput
					style={styles.textInput}
					placeholder={props.placeholder}
					onChangeText={props.onChangeText}
					onBlur={props.onBlur}
				/>
			</View>
		</View>
	);
}

export default Searchbar;
