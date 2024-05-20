import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./Button.style";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";

type Props = {
	value: string;
	icon?: any;
	onPress: () => void;
};

function Button({ value, icon, onPress }: Props) {
	return (
		<TouchableOpacity
			activeOpacity={0.9}
			style={styles.Button}
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
