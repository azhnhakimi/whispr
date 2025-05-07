import { View, Text, StyleSheet, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const FilterBtn = () => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				{ backgroundColor: pressed ? "#B0A6E6" : "#C5BAFF" },
			]}
			onPress={() => console.log("Filter Pressed")}
		>
			<AntDesign name="filter" size={16} color="black" />
			<Text style={styles.text}>Filter</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 32,
		backgroundColor: "#C5BAFF",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 25,
		gap: 5,
		paddingHorizontal: 10,
		minWidth: 80,
	},
	text: {
		color: "#000",
		fontSize: 14,
	},
});

export default FilterBtn;
