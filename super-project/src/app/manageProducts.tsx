import { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import styles from "./css/manageProducts.style";
import Navbar from "../components/navbar/NavBar";
import ProductList from "../components/productsList/ProductList";
import { ProductData } from "../types/types";
import Button from "../components/button/Button";
import Searchbar from "../components/searchbar/Searchbar";

function ManageProducts() {
	let [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8080/products", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (response.ok) {
					response.json().then((json) => {
						console.log(json);
						setProducts(json);
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
						onPress={() => console.log("test")}
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
				{products.map((item: ProductData, index) => (
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
