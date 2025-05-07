import { View, Text, StyleSheet } from "react-native";

import FilterBtn from "../components/FilterBtn";
import SortBtn from "../components/SortBtn";
import AddNewBtn from "../components/AddNewBtn";
import NotePanel from "../components/NotePanel";

const NoteListScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.btnContainer}>
				<FilterBtn />
				<SortBtn />
				<AddNewBtn />
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
