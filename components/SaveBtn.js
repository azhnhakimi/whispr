import { View, Text, StyleSheet, Pressable } from "react-native";

const SaveBtn = ({ onPress }) => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				{ backgroundColor: pressed ? "#511E83" : "#782EC0" },
			]}
			onPress={onPress}
		>
			<Text style={styles.text}>Save</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#782EC0",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		maxWidth: 400,
		height: 40,
		borderRadius: 10,
	},
	text: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 18,
	},
});

export default SaveBtn;
