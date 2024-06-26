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
import Toast from "react-native-toast-message";

function addProduct() {
	let [name, setName] = useState<string>("");
	let [description, setDescription] = useState<string>("");
	let [price, setPrice] = useState<string>("");
	let [imageUrl, setImageUrl] = useState<string>();

	const dispatch = useDispatch();
	const navigation = useNavigation<any>();

	function handleButtonPress() {
		async function loadData() {
			try {
				let data = await ProductModel.createNewProduct({
					name: name,
					description: description,
					price: Number(price.replace(",", ".")),
					image: imageUrl,
				});

				if (data.error) {
					return Toast.show({
						type: "error",
						text1: `Error: ${data.error}`,
						text2: "Failed to create product!",
					});
				}

				dispatch(addNewItem(data));

				Toast.show({
					type: "success",
					text1: "Success",
					text2: "New product created with success!",
				});

				navigation.navigate(Utils.screenNames.MANAGE_PRODUCTS);
			} catch (error: any) {
				Toast.show({
					type: "error",
					text1: "Error",
					text2: error,
				});
			}
		}
		loadData();
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
							onChangeText={(e: string) => setPrice(e)}
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
