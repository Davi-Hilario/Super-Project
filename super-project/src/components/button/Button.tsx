import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./Button.style";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";

type Props = {
	value: string;
	icon?: any;
	color?: string;
	onPress: () => void;
};

function Button({ value, icon, color, onPress }: Props) {
	return (
		<TouchableOpacity
			activeOpacity={0.9}
			style={[styles.Button, { backgroundColor: color || colors.blue[500] }]}
			onPress={onPress}
		>
			<Text style={styles.btnText}>{value}</Text>
			{icon && (
				<MaterialIcons name={icon} size={30} color={colors.white[200]} />
			)}
		</TouchableOpacity>
	);
}

export default Button;
