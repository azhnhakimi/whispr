import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FolderListScreen = () => {
	return (
		<View style={styles.container}>
			<Text>This is the FolderListScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F0ECF5",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default FolderListScreen;
