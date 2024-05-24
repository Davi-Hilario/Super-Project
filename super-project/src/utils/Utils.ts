enum ScreenNames {
	LOGIN = "index",
	REGISTER = "register",
	HOME = "home",
	MANAGE_ACCOUNTS = "manageAccounts",
	MANAGE_PRODUCTS = "manageProducts",
	ADD_PRODUCT = "addProduct",
	EDIT_PRODUCT = "editProduct",
	ADD_ACCOUNT = "addAccount",
	EDIT_ACCOUNT = "editAccount",
}

export default class Utils {
	static readonly screenNames = ScreenNames;
}
