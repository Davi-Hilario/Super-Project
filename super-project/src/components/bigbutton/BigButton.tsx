import styles from "./BigButton.style";
import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

type Props = {
	text: string;
	icon: any;
	onClick: () => void;
};

function BigButton({ text, icon, onClick }: Props) {
	return (
		<TouchableOpacity style={styles.card} onPress={onClick}>
			<MaterialIcons name={icon} size={60} color={colors.white[200]} />
			<Text style={styles.cardText}>{text}</Text>
		</TouchableOpacity>
	);
}

export default BigButton;
