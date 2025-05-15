import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const FolderPanel = () => {
	return (
		<View style={styles.container}>
			<View style={styles.subContainer}>
				<View style={styles.folderDetails}>
					<AntDesign name="folder1" size={30} color="black" />
					<Text style={styles.folderNameText}>Folder</Text>
				</View>
				<Text style={styles.lastModifiedText}>
					Last modified DD/MM/YYYY
				</Text>
			</View>
			<Feather name="more-vertical" size={24} color="black" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 10,
		paddingVertical: 7,
		borderBottomColor: "#E3E3E3",
		borderBottomWidth: 2,
	},
	subContainer: {},
	folderDetails: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	lastModifiedText: {
		fontSize: 12,
		color: "#9D9D9D",
	},
	folderNameText: {
		fontSize: 14,
		fontWeight: "bold",
	},
});

export default FolderPanel;
