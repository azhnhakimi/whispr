import { View, Text, StyleSheet } from "react-native";
import { MenuView, MenuComponentRef } from "@react-native-menu/menu";

import FilterBtn from "../components/FilterBtn";
import SortBtn from "../components/SortBtn";
import AddNewBtn from "../components/AddNewBtn";
import NotePanel from "../components/NotePanel";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { useRef, useEffect, useState, useCallback } from "react";

import { fetchData } from "../Utils";

const NoteListScreen = () => {
	const navigation = useNavigation();
	const [whisprData, setWhisprData] = useState({});

	const onDelete = (noteID) => {
		const { [noteID]: _, ...newWhisprData } = whisprData;

		const storeData = async (newData) => {
			try {
				await AsyncStorage.setItem(
					"whisprData",
					JSON.stringify(newData)
				);
			} catch (e) {
				console.log(e);
			}
		};

		storeData(newWhisprData);

		setWhisprData(newWhisprData);
	};

	useFocusEffect(
		useCallback(() => {
			const loadData = async () => {
				const data = await fetchData();
				if (data) {
					setWhisprData(data);
				}
			};
			loadData();
		}, [])
	);

	return (
		<View style={styles.container}>
			<View style={styles.btnContainer}>
				<FilterBtn />
				<SortBtn />
				<AddNewBtn
					onPress={() => {
						console.log("navigate");
						navigation.navigate("NoteEditorScreen");
					}}
				/>
			</View>
			<View>
				{Object.entries(whisprData).map(([key, value], index) => (
					<NotePanel
						key={key}
						title={value.title}
						label={value.label}
						folder={value.folder}
						lastModified={value.lastModified}
						onDelete={() => onDelete(key)}
					/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F0ECF5",
		alignItems: "center",
		justifyContent: "flex-start",
		gap: 30,
	},
	btnContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "flex-start",
		gap: 10,
		paddingLeft: 10,
	},
});

export default NoteListScreen;
