import Utils from "../utils/Utils";
import { UserData } from "../types/types";
import { colors } from "../styles/colors";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { userModel } from "../model/userModel";
import styles from "./css/manageAccounts.style";
import Navbar from "../components/navbar/NavBar";
import Button from "../components/button/Button";
import { Alert, FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Searchbar from "../components/searchbar/Searchbar";

import {
	addAllAccounts,
	deleteAllAccounts,
	pressAll,
} from "../redux/slices/accountsSlice";

import UserList from "../components/usersList/UserList";

function ManageAccounts() {
	const allAccounts = useSelector((state: any) => state.accounts);
	const navigation = useNavigation<any>();
	const dispatch = useDispatch();

	let [searchText, setSearchText] = useState("");
	let [accountsList, setAccountsList] = useState([]);
	let [pressedAccountsList, setpressedAccountsList] = useState([]);

	useEffect(() => {
		async function loadData() {
			let data: UserData = await userModel.findAllUsers();
			dispatch(addAllAccounts(data));
			setAccountsList(allAccounts);
		}
		loadData();
	}, []);

	useEffect(() => {
		handleSearch();

		let pressedItems = allAccounts.filter((item: UserData) => item.pressed);
		setpressedAccountsList(pressedItems);
	}, [allAccounts]);

	function handleSearch() {
		setAccountsList(
			allAccounts.filter((value: any) =>
				value.name.toUpperCase().includes(searchText.toUpperCase())
			)
		);
	}

	return (
		<View style={styles.ManageAccounts}>
			<Navbar selectedId={5} />
			<View style={styles.optionsArea}>
				<Searchbar
					placeholder='Serch for an account name'
					onPress={handleSearch}
					onChangeText={setSearchText}
					onBlur={handleSearch}
				/>
				<View style={styles.buttonsArea}>
					<Button
						value='Add new Account'
						icon='add'
						onPress={() => navigation.navigate(Utils.screenNames.ADD_ACCOUNT)}
					/>
					{pressedAccountsList.length != 0 && (
						<View style={styles.deleteAccountsArea}>
							<View style={styles.btnFragment}>
								<Button
									value='Select All'
									onPress={() => {
										allAccounts.forEach((item: UserData) => {
											dispatch(
												pressAll({
													data: accountsList,
													isPressed:
														pressedAccountsList.length >= 1 &&
														pressedAccountsList.length != accountsList.length,
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
										dispatch(deleteAllAccounts(pressedAccountsList));
										pressedAccountsList.forEach((product: UserData) => {
											userModel.deleteAccount(product.id as number);
										});

										Alert.alert(
											"Success!",
											`${pressedAccountsList.length} accounts deleted with success!`
										);
										setpressedAccountsList([]);

										let newProducts = allAccounts.filter(
											(item: UserData) => !item.pressed
										);
										dispatch(addAllAccounts(newProducts));
									}}
								/>
							</View>
						</View>
					)}
				</View>
			</View>
			<FlatList
				data={accountsList}
				renderItem={({ item }: { item: UserData }) => (
					<UserList
						id={item.id}
						name={item.name}
						role={item.role}
						email={item.email}
						password={item.password}
						image={item.image}
						pressed={item.pressed}
					/>
				)}
				contentContainerStyle={{
					justifyContent: "center",
					alignItems: "center",
				}}
			/>
		</View>
	);
}

export default ManageAccounts;
