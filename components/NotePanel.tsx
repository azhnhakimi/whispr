import { View, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const NotePanel = () => {
	return (
		<View style={styles.container}>
			<View style={styles.subContainer}>
				<View style={styles.noteDetailsContainer}>
					<FontAwesome6 name="file-text" size={30} color="black" />
					<View style={styles.subNoteDetails}>
						<Text style={styles.noteNameText}>
							Note Name [ FOLDER ]
						</Text>
						<Text style={styles.labelText}>Label</Text>
					</View>
				</View>
				<View style={styles.lastModifiedContainer}>
					<Text style={styles.lastModifiedText}>
						Last Modified DD/MM/YYYY
					</Text>
				</View>
			</View>
			<View style={styles.moreOptionsContainer}>
				<Feather name="more-vertical" size={24} color="black" />
			</View>
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
	subContainer: {
		// backgroundColor: "pink",
		gap: 5,
	},
	noteDetailsContainer: {
		// backgroundColor: "yellow",
		flexDirection: "row",
		alignItems: "center",
		gap: 20,
	},
	subNoteDetails: {},
	lastModifiedContainer: {
		// backgroundColor: "red",
	},
	moreOptionsContainer: {
		// backgroundColor: "green",
	},
	noteNameText: {
		fontSize: 14,
		fontWeight: "bold",
	},
	labelText: {
		fontSize: 14,
	},
	lastModifiedText: {
		fontSize: 12,
		color: "#9D9D9D",
	},
});

export default NotePanel;
