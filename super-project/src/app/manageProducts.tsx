import Utils from "../utils/Utils";
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

import { addAllProducts } from "../redux/slices/productsSlice";

function ManageProducts() {
	const allProducts = useSelector((state: any) => state.products);
	const navigation = useNavigation<any>();
	const dispatch = useDispatch();

	let [searchText, setSearchText] = useState("");
	let [productsList, setProductsList] = useState([]);

	useEffect(() => {
		async function loadData() {
			let data = await ProductModel.findAllProducts();
			dispatch(addAllProducts(data));
			setProductsList(allProducts);
		}
		loadData();
	}, []);

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
						id={item.id}
						name={item.name}
						description={item.description}
						image={item.image}
						price={item.price}
						key={index}
					/>
				))}
			</ScrollView>
		</View>
	);
}

export default ManageProducts;
