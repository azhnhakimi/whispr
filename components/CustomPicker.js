import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const CustomPicker = ({ headerText, prompt, items, value, onChange }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{headerText}</Text>
			<View style={styles.innerContainer}>
				<Picker
					style={styles.pickerStyle}
					mode="dialog"
					prompt={prompt}
					selectedValue={value}
					onValueChange={onChange}
				>
					<Picker.Item label="None" value="none" />
					{items.map((option) => (
						<Picker.Item
							label={option}
							value={option}
							key={option}
						/>
					))}
				</Picker>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// backgroundColor: "red",
		marginTop: 10,
	},
	innerContainer: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		maxWidth: 400,
		height: 50,
	},
	pickerStyle: {
		width: "100%",
		// backgroundColor: "yellow",
	},
	text: {
		// backgroundColor: "red",
		color: "#9D9D9D",
		width: "100%",
	},
});

export default CustomPicker;
