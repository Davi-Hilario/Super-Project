import { Text, View } from "react-native";
import styles from "./css/addNewItem.style";
import Navbar from "../components/navbar/NavBar";
import Input from "../components/input/Input";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import Button from "../components/button/Button";
import { useState } from "react";

function addNewItem() {
	let [name, setName] = useState<string>("");
	let [description, setDescription] = useState<string>("");
	let [price, setPrice] = useState<number>(0.0);
	let [imageUrl, setImageUrl] = useState<string>("");

	function handleButtonPress() {
		console.log("Pressed");
	}

	return (
		<View style={styles.AddNewItem}>
			<Navbar selectedId={4} />
			<View style={styles.contentArea}>
				<Text style={styles.title}>ADD A NEW PRODUCT</Text>
				<View style={styles.form}>
					<Input>
						<Input.Field placeholder='Product name' onChangeText={setName} />
						<MaterialIcons name='computer' size={30} color={colors.blue[900]} />
					</Input>
					<Input>
						<Input.Field
							placeholder='Product description'
							onChangeText={setDescription}
						/>
						<FontAwesome name='pencil' size={30} color={colors.blue[900]} />
					</Input>
					<Input>
						<Input.Field
							placeholder='Product price (R$)'
							keyboardType='numeric'
							onChangeText={(e: string) => setPrice(Number(e))}
						/>
						<FontAwesome name='money' size={30} color={colors.blue[900]} />
					</Input>
					<Input>
						<Input.Field
							placeholder='Product image url'
							onChangeText={setImageUrl}
						/>
						<MaterialIcons name='link' size={30} color={colors.blue[900]} />
					</Input>
					<Button value='Add product' onPress={handleButtonPress} />
				</View>
			</View>
		</View>
	);
}

export default addNewItem;
