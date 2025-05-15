import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import CustomTextInput from "../components/CustomTextInput";
import SaveBtn from "../components/SaveBtn";

const NewFolderScreen = () => {
	const [folderName, setFolderName] = useState("");

	const onSave = async () => {};

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<CustomTextInput
					height={50}
					placeholder={"Folder name here..."}
					value={folderName}
					onChange={(folderName) => setFolderName(folderName)}
				/>
				<SaveBtn onPress={onSave} />
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
		backgroundColor: "#F0ECF5",
	},
});

export default NewFolderScreen;
