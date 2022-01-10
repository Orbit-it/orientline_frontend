import React, {useState, useEffect} from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
//import moment from 'moment';
import { Image } from "react-native-expo-image-cache";

import Text from "./Text";

import colors from "../config/colors";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


function CardProgramm({ title, institute, user, email, nationality, renderRightActions }) {


	return (
		<Swipeable renderRightActions={renderRightActions}>
			<View style={styles.card}>
			<View  style={styles.entete}>
					<Text style={styles.title_univ} numberOfLines={3}>
						{institute}
					</Text>
					<Text style={styles.title_univ} numberOfLines={3}>
						{title}
					</Text>
					<Text style={styles.title_univ} numberOfLines={3}>
						{user}
					</Text>
					<Text style={styles.title_univ} numberOfLines={3}>
						{email}
					</Text>
                    <Text style={styles.title} numberOfLines={1}>
						{nationality}
					</Text>
				 </View>		
			</View>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: "hidden",
	},
	detailsContainerLeft: {
		padding: 20,
	},
	detailsContainerRight:{
		position:'absolute',
		right:20,
		bottom:20
	},
	time:{
		color:'grey'
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize:18,
		padding:3,
		paddingHorizontal:10,
		marginBottom:7,
	

	},
	title_univ: {
		color: colors.primary,
		fontWeight: "bold",
		fontSize:20,
		marginTop:15,
		marginLeft:10
	},
	subTitle: {
		marginBottom: 7,
	},
	entete :{
		justifyContent:'flex-start',
		
	},
});

export default CardProgramm;
