import React from "react";
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";

import colors from "../config/colors";

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');

function AppButton({ title, onPress, color = "primary" }) {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: "center",
		alignItems: "center",
		padding: height*0.02,
		width: "100%",
		marginVertical: 20,
		backgroundColor: colors.primary,
		borderRadius: 10,
	},
	text: {
		color: colors.white,
		fontSize: 18,
		fontWeight: "bold",
		textTransform: "uppercase",
	},
});

export default AppButton;
