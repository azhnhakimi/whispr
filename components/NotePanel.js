import {
	View,
	Text,
	StyleSheet,
	Pressable,
	TouchableHighlight,
	TouchableOpacity,
	Platform,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { useRef } from "react";

import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
	MenuProvider,
} from "react-native-popup-menu";
import { showMessage, hideMessage } from "react-native-flash-message";

const NotePanel = ({
	title,
	details,
	label,
	folder,
	lastModified,
	onDelete,
}) => {
	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.subContainer}>
				<View style={styles.noteDetailsContainer}>
					<FontAwesome6 name="file-text" size={30} color="black" />
					<View style={styles.subNoteDetails}>
						<Text style={styles.noteNameText}>
							{title} [ {folder} ]
						</Text>
						<Text style={styles.labelText}>{label}</Text>
					</View>
				</View>
				<View style={styles.lastModifiedContainer}>
					<Text style={styles.lastModifiedText}>{lastModified}</Text>
				</View>
			</View>
			<Menu>
				<MenuTrigger customStyles={menuTriggerStyles}>
					<Feather name="more-vertical" size={24} color="black" />
				</MenuTrigger>
				<MenuOptions customStyles={menuOptionsStyles}>
					<MenuOption onSelect={onDelete}>
						<View style={styles.menuOptionContainer}>
							{/* <MaterialCommunityIcons
								name="delete"
								size={28}
								color="white"
							/> */}
							<Text
								style={{
									color: "white",
									flex: 1,
									textAlign: "center",
									textAlignVertical: "center",
									fontSize: 18,
								}}
							>
								Delete
							</Text>
						</View>
					</MenuOption>
				</MenuOptions>
			</Menu>
		</TouchableOpacity>
	);
};

const menuTriggerStyles = {
	triggerOuterWrapper: {
		// backgroundColor: "red",
		marginRight: 10,
		aspectRatio: 1,
		width: 30,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
	},
	triggerWrapper: {
		// backgroundColor: "green",
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
	},
	TriggerTouchableComponent: TouchableOpacity,
	triggerTouchable: {
		aspectRatio: 1,
		width: 35,
		justifyContent: "center",
		alignItems: "center",
	},
};

const menuOptionsStyles = {
	optionsWrapper: {
		backgroundColor: "red",
		justifyContent: "center",
		alignItems: "center",
	},
	optionWrapper: {
		// backgroundColor: "purple",
		width: "80%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 5,
	},
	optionText: {
		fontSize: 16,
	},
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
		backgroundColor: "green",
	},
	noteNameText: {
		fontSize: 14,
		fontWeight: "bold",
	},
	labelText: {
		fontSize: 14,
		fontStyle: "italic",
	},
	lastModifiedText: {
		fontSize: 12,
		color: "#9D9D9D",
	},
	moreOptionsBtn: {
		// backgroundColor: "#ffffff",
		backgroundColor: "red",
		borderRadius: "50%",
		aspectRatio: 1,
		width: 35,
		justifyContent: "center",
		alignItems: "center",
	},
	menuOptionContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
});

export default NotePanel;
