import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	Platform,
	Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SIZE = 27;

const BackBtnHeader = (props) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Pressable
				style={styles.btn}
				onPress={() => {
					navigation.goBack();
					console.log("lets go back");
				}}
			>
				<Ionicons name="arrow-back" size={SIZE} color="black" />
			</Pressable>

			{/* <Text style={styles.text}>{props.title}</Text> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F0ECF5",
		// backgroundColor: "red",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		paddingTop:
			Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) + 15 : 0,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 5,
	},
	text: {
		color: "#000",
		fontSize: SIZE,
		fontFamily: "AndikaRegular",
		flex: 1,
		// backgroundColor: "red",
		textAlign: "center",
	},
	btn: {
		// backgroundColor: "red",
		width: 29,
		height: 29,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default BackBtnHeader;
