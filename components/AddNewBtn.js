import {
	View,
	Text,
	StyleSheet,
	Pressable,
	GestureResponderEvent,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const AddNewBtn = ({ onPress }) => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				{ backgroundColor: pressed ? "#782EC0" : "#8B34E1" },
			]}
			onPress={onPress}
		>
			<AntDesign name="plus" size={24} color="white" />
			<Text style={styles.text}>Add New</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 32,
		backgroundColor: "#8B34E1",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 25,
		gap: 5,
		paddingHorizontal: 15,
	},
	text: {
		color: "#fff",
		fontSize: 14,
	},
});

export default AddNewBtn;
