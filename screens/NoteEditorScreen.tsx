import { View, Text, StyleSheet } from "react-native";

const NoteEditorScreen = () => {
	return (
		<View style={styles.container}>
			<Text>This is the NoteEditorScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default NoteEditorScreen;
