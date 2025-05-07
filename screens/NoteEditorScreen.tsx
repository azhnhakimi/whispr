import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import CustomTextInput from "../components/CustomTextInput";
import SaveBtn from "../components/SaveBtn";

const NoteEditorScreen = () => {
	return (
		<SafeAreaProvider>
			<SafeAreaView
				style={styles.container}
				edges={["bottom", "left", "right"]}
			>
				<View style={styles.inputContainer}>
					<CustomTextInput
						height={50}
						placeholder={"Title here..."}
					/>
					<CustomTextInput
						height={400}
						placeholder={"Write here..."}
					/>
				</View>
				<SaveBtn />
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F0ECF5",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 10,
	},
	inputContainer: {
		width: "100%",
		maxWidth: 400,
	},
});

export default NoteEditorScreen;
