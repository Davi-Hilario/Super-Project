import AsyncStorage from "@react-native-async-storage/async-storage";

async function validateAuth(): Promise<object | null> {
	let keys = await AsyncStorage.getAllKeys;
	return keys.length === 0 ? null : keys;
}

export const FUNCTIONS = {
	validateAuth,
};
