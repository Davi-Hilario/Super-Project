import { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import styles from "./css/manageProducts.style";
import Navbar from "../components/navbar/NavBar";
import ProductList from "../components/productsList/ProductList";
import { ProductData } from "../types/types";

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
			<ScrollView>
				{products.map((item: ProductData, index) => (
					<ProductList
						name={item.name}
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
