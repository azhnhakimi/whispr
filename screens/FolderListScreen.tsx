import React from "react";
import { View, Text, StyleSheet } from "react-native";

import SortBtn from "../components/SortBtn";
import AddNewBtn from "../components/AddNewBtn";
import FolderPanel from "../components/FolderPanel";

const FolderListScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.btnContainer}>
				<SortBtn />
				<AddNewBtn onPress={() => console.log("pressed")} />
			</View>

			<View>
				<FolderPanel />
				<FolderPanel />
				<FolderPanel />
				<FolderPanel />
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

export default FolderListScreen;
