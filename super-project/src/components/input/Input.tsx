import { styles } from "./Input.style";
import { TextInput, View, TextInputProps } from "react-native";
import { ReactNode } from "react";
import { colors } from "@/src/styles/colors";

function Input({ children }: { children: ReactNode }) {
	return <View style={styles.Input}>{children}</View>;
}

function Field({ ...props }: TextInputProps) {
	return (
		<TextInput
			style={styles.Field}
			className='font-canadaMedium'
			placeholderClassName='font-canadaMedium'
			placeholderTextColor={colors.blue[900]}
			{...props}
		/>
	);
}

Input.Field = Field;

export default Input;
