import Utils from "@/src/utils/Utils";
import { colors } from "@/src/styles/colors";

export const DATA = [
	{
		id: 1,
		title: "Home",
		icon: "home",
		backgroundColor: colors.white[200],
		foregroundColor: colors.blue[900],
		navigationUrl: Utils.screenNames.HOME,
	},
	{
		id: 2,
		title: "Profile",
		icon: "person",
		backgroundColor: colors.white[200],
		foregroundColor: colors.blue[900],
		navigationUrl: Utils.screenNames.LOGIN,
	},
	{
		id: 3,
		title: "Settings",
		icon: "settings",
		backgroundColor: colors.white[200],
		foregroundColor: colors.blue[900],
		navigationUrl: Utils.screenNames.LOGIN,
	},
	{
		id: 4,
		title: "Manage Products",
		icon: "inventory",
		backgroundColor: colors.white[200],
		foregroundColor: colors.blue[900],
		navigationUrl: Utils.screenNames.MANAGE_PRODUCTS,
	},
	{
		id: 5,
		title: "Manage Accounts",
		icon: "manage-accounts",
		backgroundColor: colors.white[200],
		foregroundColor: colors.blue[900],
		navigationUrl: Utils.screenNames.MANAGE_ACCOUNTS,
	},
];
