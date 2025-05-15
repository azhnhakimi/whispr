import { View, Text, StyleSheet, StatusBar, Platform } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";

const SIZE = 25;

const CustomHeader = (props) => {
	return (
		<View style={styles.container}>
			<FontAwesome6 name="circle-user" size={SIZE} color="black" />
			<Text style={styles.text}>{props.routeName}</Text>
			<Feather name="settings" size={SIZE} color="black" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F0ECF5",
		// backgroundColor: "red",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingTop:
			Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) + 10 : 0,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 5,
	},
	text: {
		color: "#000",
		fontSize: SIZE,
		fontFamily: "AndikaRegular",
	},
});

export default CustomHeader;
