import React, {useState, useEffect} from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
//import moment from 'moment';
import { Image } from "react-native-expo-image-cache";

import Text from "./Text";

import colors from "../config/colors";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


function Card({ title, subTitle, institute, profile, imageUrl, onPress, thumbnailUrl, renderRightActions }) {

	/*const [currentDate, setCurrentDate] = useState('');

	useEffect(()=>{
		var date = new Date().getDate();
		setCurrentDate(date);
	}, []) */
	
	//const Timer = moment().calendar();

	return (
		<Swipeable renderRightActions={renderRightActions}>
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.card}>
			<View  style={styles.entete}>
			<Image
					style={styles.profile}
					tint="light"
					//preview={{ uri: thumbnailUrl }}
					uri={profile}
				/>
					<Text style={styles.title_univ} numberOfLines={3}>
						{institute}
					</Text>
				 </View>		
			
				<Image
					style={styles.image}
					tint="light"
					preview={{ uri: thumbnailUrl }}
					uri={imageUrl}
				/>

				<View style={styles.detailsContainerLeft}>
					<Text style={styles.title} numberOfLines={1}>
						{title}
					</Text>
					<Text style={styles.subTitle} numberOfLines={5}>
						{subTitle}
					</Text>
				</View>
				<View style={styles.detailsContainerRight} >
				</View>
			</View>
		</TouchableWithoutFeedback>
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
		color: colors.primary,
		fontWeight: "bold",
		fontSize:18,
		padding:3,
		paddingHorizontal:10,
		marginBottom:7,
		borderColor:colors.primary,
		borderWidth:1,
		borderRadius:5,
	

	},
	title_univ: {
		color: colors.primary,
		fontWeight: "bold",
		fontSize:20,
		marginTop:15,
	},
	subTitle: {
		marginBottom: 7,
		//fontWeight:"bold",
		fontSize:17,
		color:"grey"
	},
	entete :{
		flexDirection: 'row',
		justifyContent:'flex-start',
		
	},
	profile :{
		height: 40,
		width: 40,
		borderRadius:20,
		margin:10,
		borderWidth:1,
		borderColor:"#EFE6E5"
	}
});

export default Card;
