import { View, Text, StyleSheet, TextInput } from "react-native";

const CustomTextInput = ({ height, placeholder, value, onChange }) => {
	return (
		<View style={[styles.container, { height: height }]}>
			<TextInput
				style={[styles.textInput, styles.unfocused]}
				autoComplete="off"
				multiline
				placeholder={placeholder}
				value={value}
				onChangeText={onChange}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		maxWidth: 400,
	},
	textInput: {
		fontFamily: "RobotoRegular",
		fontSize: 18,
		// backgroundColor: "orange",
		width: "100%",
		height: "100%",
		textAlignVertical: "top",
		borderWidth: 2,
	},
	focused: {
		borderColor: "#000000",
	},
	unfocused: {
		borderColor: "#ECECEC",
		// borderColor: "red",
	},
});

export default CustomTextInput;
