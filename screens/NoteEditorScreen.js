import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { getNewFormattedDate } from "../Utils";

import CustomTextInput from "../components/CustomTextInput";
import SaveBtn from "../components/SaveBtn";
import CustomPicker from "../components/CustomPicker";
import { useState, useRef } from "react";
import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { fetchData } from "../Utils";

const NoteEditorScreen = () => {
	const [noteTitle, setNoteTitle] = useState("");
	const [noteDetails, setNoteDetails] = useState("");
	const [labelSelection, setLabelSelection] = useState("None");
	const [folderSelection, setFolderSelection] = useState("None");

	const navigation = useNavigation();

	const onPressSaveBtn = async () => {
		// check irregular spacing
		const formattedTitle = noteTitle
			.split("\n")
			.map((line) => line.trim().replace(/ {2,}/g, " "))
			.join("\n");
		const formattedDetails = noteDetails
			.split("\n")
			.map((line) => line.trim().replace(/ {2,}/g, " "))
			.join("\n");

		// check empty fields
		if (formattedTitle === "" || formattedDetails === "") {
			// console.log(Date.now());
			showMessage({
				message: "Warning",
				description: "Fields cannot be empty!",
				type: "danger",
				floating: true,
				statusBarHeight: StatusBar.currentHeight,
				style: { backgroundColor: "#D0342C" },
			});

			return;
		}

		const NOTE = {
			title: formattedTitle,
			details: formattedDetails,
			label: labelSelection,
			folder: folderSelection,
			lastModified: getNewFormattedDate(),
		};

		const storeData = async (newEntry) => {
			try {
				// const existingDataJSON = await AsyncStorage.getItem(
				// 	"whisprData"
				// );
				// const existingData = existingDataJSON
				// 	? JSON.parse(existingDataJSON)
				// 	: {};

				let existingDataJSON = await fetchData();
				if (!existingDataJSON) {
					existingDataJSON = {};
				}

				const dataID = Date.now();
				const updatedData = {
					...existingDataJSON,
					[dataID]: newEntry,
				};

				await AsyncStorage.setItem(
					"whisprData",
					JSON.stringify(updatedData)
				);
			} catch (e) {
				console.log("error", e);
			}
		};

		await storeData(NOTE);
		console.log("succ");
		navigation.navigate("BottomTabs", {
			screen: "Home",
		});
	};

	const labels = ["Personal", "Work", "School", "Ideas"];
	const folders = ["Assignment V&V", "Home stuff", "To buy"];

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
						value={noteTitle}
						onChange={(noteTitle) => setNoteTitle(noteTitle)}
					/>
					<CustomTextInput
						height={400}
						placeholder={"Write here..."}
						value={noteDetails}
						onChange={(noteDetails) => setNoteDetails(noteDetails)}
					/>
					<CustomPicker
						headerText="Select label"
						prompt="Select a label"
						items={labels}
						value={labelSelection}
						onChange={(labelSelection) =>
							setLabelSelection(labelSelection)
						}
					/>
					<CustomPicker
						headerText="Select folder"
						prompt="Select a folder"
						items={folders}
						value={folderSelection}
						onChange={(folderSelection) =>
							setFolderSelection(folderSelection)
						}
					/>
				</View>
				<SaveBtn onPress={onPressSaveBtn} />
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
	pickerHeaderText: {
		// backgroundColor: "red",
		color: "#9D9D9D",
		// color: "red",
		marginTop: 10,
	},
});

export default NoteEditorScreen;
