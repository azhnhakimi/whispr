import { View, Text, StyleSheet } from "react-native";

import FilterBtn from "../components/FilterBtn";
import SortBtn from "../components/SortBtn";
import AddNewBtn from "../components/AddNewBtn";
import NotePanel from "../components/NotePanel";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { log } from "console";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const NoteListScreen = () => {
	const navigation = useNavigation<NavigationProp>();

	return (
		<View style={styles.container}>
			<View style={styles.btnContainer}>
				<FilterBtn />
				<SortBtn />
				<AddNewBtn
					onPress={() => {
						console.log("navigate");
						navigation.navigate("NoteEditorScreen");
					}}
				/>
			</View>
			<View>
				<NotePanel />
				<NotePanel />
				<NotePanel />
				<NotePanel />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F0ECF5",
		alignItems: "center",
		justifyContent: "flex-start",
		gap: 30,
	},
	btnContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "flex-start",
		gap: 10,
		paddingLeft: 10,
	},
});

export default NoteListScreen;
