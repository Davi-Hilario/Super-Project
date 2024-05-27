import { View } from "react-native";
import styles from "./Selectbox.style";
import { Picker } from "@react-native-picker/picker";

type Props = {
	label: string;
	value: any;
};

function Selectbox({
	items,
	selectedValue,
	onChangeValue,
}: {
	items: Props[];
	selectedValue?: any;
	onChangeValue: (value: any) => void;
}) {
	return (
		<View style={styles.Selectbox}>
			<Picker
				onValueChange={(value, index) => {
					onChangeValue(value);
				}}
				selectedValue={selectedValue}
			>
				{items &&
					items.map((item, index) => (
						<Picker.Item value={item.value} label={item.label} />
					))}
			</Picker>
		</View>
	);
}

export default Selectbox;
