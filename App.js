import { StatusBar, Platform } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";

// import icons
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FlashMessage from "react-native-flash-message";

// import screens
import NoteListScreen from "./screens/NoteListScreen";
import NoteEditorScreen from "./screens/NoteEditorScreen";
import FolderListScreen from "./screens/FolderListScreen";
import LabelListScreen from "./screens/LabelListScreen";
import GlobalSearchScreen from "./screens/GlobalSearchScreen";
import NewFolderScreen from "./screens/NewFolderScreen";

import { useEffect, useState } from "react";

// import components
import CustomHeader from "./components/CustomHeader";
import BackBtnHeader from "./components/BackBtnHeader";

import { MenuProvider } from "react-native-popup-menu";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabs() {
	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={({ route, navigation, theme }) => {
				return {
					tabBarActiveTintColor: "#8B34E1",
					freezeOnBlur: true,
					tabBarIcon: ({ focused, color, size }) => {
						if (route.name === "Home") {
							return (
								<Entypo name="home" size={size} color={color} />
							);
						} else if (route.name === "Folders") {
							return (
								<FontAwesome
									name="folder"
									size={size}
									color={color}
								/>
							);
						} else if (route.name === "Labels") {
							return (
								<MaterialIcons
									name="label"
									size={size}
									color={color}
								/>
							);
						} else if (route.name === "Search") {
							return (
								<FontAwesome
									name="search"
									size={size}
									color={color}
								/>
							);
						} else {
							return (
								<FontAwesome
									name="square"
									size={size}
									color={color}
								/>
							);
						}
					},
					animation: "shift",
					header: ({ navigation, route, options }) => {
						return <CustomHeader routeName={route.name} />;
					},
				};
			}}
		>
			<BottomTab.Screen name="Home" component={NoteListScreen} />
			<BottomTab.Screen name="Folders" component={FolderListScreen} />
			<BottomTab.Screen name="Labels" component={LabelListScreen} />
			<BottomTab.Screen name="Search" component={GlobalSearchScreen} />
		</BottomTab.Navigator>
	);
}

export default function App() {
	StatusBar.setBackgroundColor("#000000", true);
	StatusBar.setBarStyle("light-content", true);

	const [fontsLoaded] = useFonts({
		AndikaRegular: require("./assets/fonts/AndikaRegular.ttf"),
		RobotoRegular: require("./assets/fonts/RobotoRegular.ttf"),
	});

	const [isAppReady, setIsAppReady] = useState(false);

	useEffect(() => {
		if (fontsLoaded) {
			setIsAppReady(true);
			SplashScreen.hideAsync(); // fix the splashscreen
		}
	}, [fontsLoaded]);

	if (!isAppReady) {
		return null; // add spinning placeholder here
	}

	return (
		<MenuProvider>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="BottomTabs" component={BottomTabs} />
					<Stack.Screen
						name="NoteEditorScreen"
						component={NoteEditorScreen}
						options={({ route, navigation }) => ({
							headerShown: true,
							header: () => <BackBtnHeader title={"Edit Note"} />,
						})}
					/>
					<Stack.Screen
						name="NewFolderScreen"
						component={NewFolderScreen}
						options={({ route, navigation }) => ({
							headerShown: true,
							header: () => (
								<BackBtnHeader title={"Create Folde"} />
							),
						})}
					/>
				</Stack.Navigator>
			</NavigationContainer>
			<FlashMessage position="top" />
		</MenuProvider>
	);
}
