import Utils from "../utils/Utils";
import { colors } from "../styles/colors";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { ProductData } from "../types/types";
import styles from "./css/editProduct.style";
import Input from "../components/input/Input";
import Toast from "react-native-toast-message";
import Navbar from "../components/navbar/NavBar";
import Button from "../components/button/Button";
import { Image, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ProductModel } from "../model/productModel";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

function EditProduct() {
	let [name, setName] = useState<string | undefined>("");
	let [description, setDescription] = useState<string | undefined>("");
	let [price, setPrice] = useState<string | undefined>("");
	let [imageUrl, setImageUrl] = useState<string | undefined>();

	const route = useRoute<any>();
	const { id } = route.params;
	const navigation = useNavigation<any>();

	useEffect(() => {
		async function loadData() {
			let data: ProductData = await ProductModel.findProduct(id);
			setName(data.name);
			setDescription(data.description);
			setPrice(String(data.price));
			setImageUrl(data.image);
		}
		loadData();
	}, []);

	function handleButtonPress() {
		async function loadData() {
			let data = await ProductModel.updateProduct(id, {
				name: name,
				description: description,
				price: Number(String(price).replace(",", ".")),
				image: imageUrl,
			});

			if (data.error) {
				return Toast.show({
					type: "error",
					text1: `Error: ${data.error}`,
					text2: "Error in updating the product!",
				});
			}
			Toast.show({
				type: "success",
				text1: "Success!",
				text2: "The product was updated!",
			});
			navigation.navigate(Utils.screenNames.MANAGE_PRODUCTS);
		}
		loadData();
	}

	return (
		<View style={styles.EditProduct}>
			<Navbar selectedId={4} />
			<View style={styles.contentArea}>
				<Text style={styles.title}>EDIT PRODUCT</Text>
				<View style={styles.form}>
					<Input>
						<Input.Field
							value={name}
							placeholder='Product name'
							onChangeText={setName}
						/>
						<MaterialIcons name='computer' size={30} color={colors.blue[900]} />
					</Input>
					<Input>
						<Input.Field
							value={description}
							placeholder='Product description'
							onChangeText={setDescription}
						/>
						<FontAwesome name='pencil' size={30} color={colors.blue[900]} />
					</Input>
					<Input>
						<Input.Field
							value={String(price)}
							placeholder='Product price (R$)'
							keyboardType='numeric'
							onChangeText={(e: string) => setPrice(e)}
						/>
						<FontAwesome name='money' size={30} color={colors.blue[900]} />
					</Input>
					<Input>
						<Input.Field
							value={imageUrl}
							placeholder='Product image url'
							onChangeText={setImageUrl}
						/>
						<MaterialIcons name='link' size={30} color={colors.blue[900]} />
					</Input>
					<Image source={{ uri: imageUrl }} alt={name} style={styles.image} />
					<Button value='Edit product' onPress={handleButtonPress} />
				</View>
			</View>
		</View>
	);
}

export default EditProduct;
