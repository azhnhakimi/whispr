import { View, Text, StyleSheet } from "react-native";

const LabelListScreen = () => {
	return (
		<View style={styles.container}>
			<Text>This is the LabelListScreen</Text>
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

export default LabelListScreen;
