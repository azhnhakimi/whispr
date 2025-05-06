import { View, Text, StyleSheet } from "react-native";

const GlobalSearchScreen = () => {
	return (
		<View style={styles.container}>
			<Text>This is the GlobalSearchScreen</Text>
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

export default GlobalSearchScreen;
