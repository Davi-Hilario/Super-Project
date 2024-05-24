import Utils from "../utils/Utils";
import { colors } from "../styles/colors";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { ProductData } from "../types/types";
import styles from "./css/manageProducts.style";
import Button from "../components/button/Button";
import Navbar from "../components/navbar/NavBar";
import { ProductModel } from "../model/productModel";
import { useDispatch, useSelector } from "react-redux";
import { Alert, ScrollView, View } from "react-native";
import Searchbar from "../components/searchbar/Searchbar";
import ProductList from "../components/productsList/ProductList";

import {
	addAllProducts,
	deleteAllProducts,
	pressAll,
} from "../redux/slices/productsSlice";

function ManageProducts() {
	const allProducts = useSelector((state: any) => state.products);
	const navigation = useNavigation<any>();
	const dispatch = useDispatch();

	let [searchText, setSearchText] = useState("");
	let [productsList, setProductsList] = useState([]);
	let [pressedProductsList, setPressedProductsList] = useState([]);

	useEffect(() => {
		async function loadData() {
			let data: ProductData = await ProductModel.findAllProducts();
			dispatch(addAllProducts(data));
			setProductsList(allProducts);
		}
		loadData();
	}, []);

	useEffect(() => {
		handleSearch();

		let pressedItems = allProducts.filter((item: ProductData) => item.pressed);
		setPressedProductsList(pressedItems);
	}, [allProducts]);

	function handleSearch() {
		setProductsList(
			allProducts.filter((value: any) =>
				value.name.toUpperCase().includes(searchText.toUpperCase())
			)
		);
	}

	return (
		<View style={styles.ManageProducts}>
			<Navbar selectedId={4} />
			<View style={styles.optionsArea}>
				<Searchbar
					placeholder='Serch for a product'
					onPress={handleSearch}
					onChangeText={setSearchText}
					onBlur={handleSearch}
				/>
				<View style={styles.buttonsArea}>
					<Button
						value='Add new Item'
						icon='add'
						onPress={() => navigation.navigate(Utils.screenNames.ADD_PRODUCT)}
					/>
					{pressedProductsList.length != 0 && (
						<View style={styles.deleteProductsArea}>
							<View style={styles.btnFragment}>
								<Button
									value='Select All'
									onPress={() => {
										allProducts.forEach((item: ProductData) => {
											dispatch(
												pressAll({
													data: productsList,
													isPressed:
														pressedProductsList.length >= 1 &&
														pressedProductsList.length != productsList.length,
												})
											);
										});
									}}
								/>
							</View>
							<View style={styles.btnFragment}>
								<Button
									value='Delete Items'
									color={colors.red[100]}
									onPress={() => {
										dispatch(deleteAllProducts(pressedProductsList));
										pressedProductsList.forEach((product: ProductData) => {
											ProductModel.deleteProduct(product.id as number);
										});

										Alert.alert(
											"Success!",
											`${pressedProductsList.length} products deleted with success!`
										);
										setPressedProductsList([]);

										let newProducts = allProducts.filter(
											(item: ProductData) => !item.pressed
										);
										dispatch(addAllProducts(newProducts));
									}}
								/>
							</View>
						</View>
					)}
				</View>
			</View>
			<ScrollView
				style={styles.productsArea}
				contentContainerStyle={{
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{productsList.map((item: ProductData, index: number) => (
					<ProductList
						key={index}
						id={item.id}
						name={item.name}
						description={item.description}
						image={item.image}
						pressed={item.pressed}
					/>
				))}
			</ScrollView>
		</View>
	);
}

export default ManageProducts;
