import { styles } from "./Button.style";
import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

type Props = {
	value: string;
	icon?: any;
	color?: string;
	onPress: () => void;
	onPressOut?: () => void;
};

function Button({ value, icon, color, onPress, onPressOut }: Props) {
	return (
		<TouchableOpacity
			activeOpacity={0.9}
			style={[styles.Button, { backgroundColor: color || colors.blue[500] }]}
			onPress={onPress}
			onPressOut={onPressOut}
		>
			<Text style={styles.btnText}>{value}</Text>
			{icon && (
				<MaterialIcons name={icon} size={30} color={colors.white[200]} />
			)}
		</TouchableOpacity>
	);
}

export default Button;
