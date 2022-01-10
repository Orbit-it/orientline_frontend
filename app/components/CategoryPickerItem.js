import React, { useState } from "react";
import { render } from "react-dom";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Icon from "./Icon";
import Text from "./Text";
import colors from "../config/colors"

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');

var val;

var colorBack;




function CategoryPickerItem({ item, onPress }) {
	val = item.label;
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} style={styles.contour}>
				<Text style={styles.label}>{val}</Text>
			</TouchableOpacity>	
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection:'row',
		alignItems: "center",
		justifyContent:'center',
		width: "100%",

	},
	label: {
		textAlign: "center",
		fontWeight:'bold',
		fontSize:20,
		color:"grey",
		
	},
	contour:{
		borderColor:"#C1BFB1",
		borderWidth:1,
		borderRadius:5,
		margin:3,
		padding:width*0.001,
		backgroundColor:colorBack,
		width:'97%'
	}
});

export default CategoryPickerItem;
