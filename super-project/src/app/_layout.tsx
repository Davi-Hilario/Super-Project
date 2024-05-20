import "../styles/global.css";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Loading from "../components/loading/Loading";
import { useFonts } from "expo-font";
import { store } from "../redux/store";

import {
	RadioCanadaBig_400Regular,
	RadioCanadaBig_500Medium,
	RadioCanadaBig_700Bold,
} from "../assets/fonts/radioCanada";
import { Provider } from "react-redux";

function Layout() {
	const [fontsLoaded] = useFonts({
		RadioCanadaBig_400Regular,
		RadioCanadaBig_500Medium,
		RadioCanadaBig_700Bold,
	});

	return (
		<Provider store={store}>
			<StatusBar style='light' backgroundColor='#33335f' />
			{fontsLoaded ? <Slot /> : <Loading />}
		</Provider>
	);
}

export default Layout;
