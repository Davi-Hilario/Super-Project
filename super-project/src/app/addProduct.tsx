import { useState } from "react";
import Utils from "../utils/Utils";
import { useDispatch } from "react-redux";
import { colors } from "../styles/colors";
import { useNavigation } from "expo-router";
import styles from "./css/addProduct.style";
import Input from "../components/input/Input";
import { Alert, Text, View } from "react-native";
import Navbar from "../components/navbar/NavBar";
import Button from "../components/button/Button";
import { ProductModel } from "../model/productModel";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { addProduct as addNewItem } from "../redux/slices/productsSlice";

function addProduct() {
	let [name, setName] = useState<string>("");
	let [description, setDescription] = useState<string>("");
	let [price, setPrice] = useState<number>(0.0);
	let [imageUrl, setImageUrl] = useState<string>("");

	const dispatch = useDispatch();
	const navigation = useNavigation<any>();

	function handleButtonPress() {
		async function loadData() {
			let data = await ProductModel.createNewProduct({
				name: name,
				description: description,
				price: price,
				image: imageUrl,
			});
			dispatch(addNewItem(data));
			Alert.alert("Success!", "New product created with success!");
		}
		loadData();
		navigation.navigate(Utils.screenNames.MANAGE_PRODUCTS);
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

export default addProduct;
