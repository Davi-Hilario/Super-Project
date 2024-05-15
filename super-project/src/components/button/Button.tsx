import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./Button.style";

type Props = {
	value: string;
	onPress: () => void;
};

function Button({ value, onPress }: Props) {
	return (
		<TouchableOpacity
			activeOpacity={0.9}
			style={styles.Button}
			onPress={onPress}
		>
			<Text style={styles.btnText} className='font-canadaMedium'>
				{value}
			</Text>
		</TouchableOpacity>
	);
}

export default Button;
