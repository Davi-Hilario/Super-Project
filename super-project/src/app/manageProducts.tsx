import { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import styles from "./css/manageProducts.style";
import Navbar from "../components/navbar/NavBar";
import ProductList from "../components/productsList/ProductList";
import { ProductData } from "../types/types";
import Button from "../components/button/Button";
import Searchbar from "../components/searchbar/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import {
	addAllProducts,
	removeAllProducts,
} from "../redux/slices/productsSlice";
import Utils from "../utils/Utils";
import { useNavigation } from "expo-router";

function ManageProducts() {
	const allProducts = useSelector((state: any) => state.products);
	const navigation = useNavigation<any>();
	const dispatch = useDispatch();

	useEffect(() => {
		fetch("http://localhost:8080/products", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (response.ok) {
					response
						.json()
						.then((json) => {
							json.forEach((item: ProductData) => {
								dispatch(addAllProducts(item));
							});
							dispatch(removeAllProducts(json));
						})
						.catch((error) => {
							console.log(error);
						});
				} else {
					response.text().then((text) => {
						Alert.alert(`Error ${response.status}, ${text}`);
					});
				}
			})
			.catch((error) => {
				Alert.alert("Server Error", `Error while trying to get data: ${error}`);
			});
	}, []);

	return (
		<View style={styles.ManageProducts}>
			<Navbar selectedId={4} />
			<View style={styles.optionsArea}>
				<Searchbar
					placeholder='Serch for a product'
					onPress={() => console.log("Search")}
					onChangeText={(e) => console.log(e)}
				/>
				<View style={styles.buttonsArea}>
					<Button
						value='Add new Item'
						icon='add'
						onPress={() => navigation.navigate(Utils.screenNames.ADD_NEW_ITEM)}
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
				{allProducts.map((item: ProductData, index: number) => (
					<ProductList
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
