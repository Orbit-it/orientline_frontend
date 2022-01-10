import React, {useState} from "react";
import { View, StyleSheet, Platform, TouchableOpacity, Alert, Dimensions } from "react-native";
import { Image } from "react-native-expo-image-cache";

import ListItem from "../components/lists/ListItem";

import ContactSellerForm from "../components/ContactSellerForm";
import Text from "../components/Text";
import routes from "../navigation/routes";
import { AntDesign } from "@expo/vector-icons";
import candidaturesApi from "../api/candidatures";
import useAuth from "../auth/useAuth";

import colors from "../config/colors";
import { backgroundColor, color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');


function ListingDetailsScreen({ route, navigation }) {
	const listing = route.params;

	const {user} = useAuth();

	

	 
	let univ = listing.institute
	let prog = listing.title

	let nom = user.name
	let email = user.email
	let nationality = user.nationality.label


	const handleSubmit = async (candidature_title, candidature_institute,
		candidature_user,
		candidature_email,
		candidature_nationality
		) => {
			
		const result = await candidaturesApi.addcandidature(
			candidature_title = prog, 
			candidature_institute = univ,
			candidature_user = nom,
			candidature_email = email,
			candidature_nationality = nationality,
		);
		

        if (!result.ok) {
			return alert("Admission non Effectuée , veuillez contacter OrientLine pour plus d'infos !");
		}
		
        Alert.alert("Félicitation!", "Requête envoyée avec succès, nous vous notifierons de la suite de votre candidature dans les prochaines 48h sur votre adresse fournit lors de la création du compte.");
	};

	var nav = ""

/*
	if (univ == "IPSAS") {
		nav = routes.DISCOVER_ESEAC
	}else if(univ == "ESEAC"){
		nav = routes.DISCOVER_ESEAC
	}else {
		nav = routes.DISCOVER_LASALL
	}  */

	switch (univ) {
		case "IPSAS":
		  nav = routes.DISCOVER_IPSAS;
		  break;
		case "ESEAC":
		  nav =	routes.DISCOVER_ESEAC;
		  break;
		case "LaSalle":
			nav =	routes.DISCOVER_LASALL;
		  break;
	  }



	//const nav = (univ == "IPSAS")? routes.DISCOVER_IPSAS : routes.DISCOVER_ESEAC

	return (
		<SafeAreaView>
		<ScrollView
			behavior="position"
			keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
		>
			<Image
				style={styles.image}
				preview={{ uri: listing.images[1].thumbnailUrl }}
				tint="light"
				uri={listing.images[1].url}
			/>
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{listing.title}</Text>
				<Text style={styles.description}>{listing.description}</Text>
			</View>
			<View style={styles.info}>
				<View style={styles.infodetail} /* Info sur la durée des études  */>
					<Text style={styles.title_info}> Durée </Text>
					<Text style={styles.subtitle_info} >{listing.duration} ans</Text>
			 	</View>

				 <View style={styles.infodetail} /* Info sur les modalités  */>
					<Text style={styles.title_info}> Modalités </Text>
					<Text style={styles.sub_title_info}> Coût Annuel: <Text style={{color:colors.secondary,fontSize:width*0.04, fontWeight:'bold'}}> {listing.price} Euro </Text> </Text>
					<Text style={styles.sub_title_info}> Payable par tranches </Text>
			 	</View>
			</View>
			<View style={{justifyContent:'center', alignItems:'center', justifyContent:"space-around"}}>
				<TouchableOpacity style={styles.buttonPost} onPress={handleSubmit}  /* + item *   () => navigation.navigate(routes.POSTULER) */>
					<Text style={styles.button}>Postuler</Text> 
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonUniv} onPress={() => navigation.navigate(nav)} /* + item  */>
					<Text style={styles.button}>Découvrir l'Institut</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.retour} onPress={() => navigation.goBack()} >
					<AntDesign
							name="arrowleft"
							color={colors.secondary}
							size={50}
						/>
						<Text style={{color:colors.secondary, margin:5, fontSize:width*0.04}} >Retour à la Liste des Programmes</Text>
				</TouchableOpacity>
		</ScrollView>
		</SafeAreaView>
	);
};


const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20,
	},
	info:{
		flexDirection:"row",
		justifyContent:'space-between',
		marginTop:20,
		margin:20
	},
	title_info:{
		color: colors.secondary,
		fontWeight:'bold',
		alignSelf:'center',
		fontSize:width*0.04
	},
	subtitle_info:{
		alignSelf:'center'
	},
	sub_title_info:{
		fontSize:width*0.035
	},

	infodetail:{
		borderColor:colors.secondary,
		borderWidth:1,
		borderRadius:40,
		backgroundColor:'#fff',
		padding:width*0.07,
		justifyContent:"space-around"
	},
	image: {
		width: "100%",
		height: 300,
	},
	title: {
		color: colors.primary,
		fontWeight: "bold",
		fontSize: 24,
		paddingHorizontal:10,
		borderColor:colors.primary,
		borderWidth:1,
		borderRadius:5,
	},
	userContainer: {
		marginVertical: 40,
	},
	description:{
		fontSize:width*0.04,
		marginVertical:width*0.02,
		position:"relative",
		justifyContent:"center",
		color:"grey"
		

	},
	buttonPost :{
		height: 45,
		width:'90%',
		backgroundColor:'#00B0F0',
		borderRadius:5,
		justifyContent:'center',
		alignItems:'center',
		margin:5
	},
	buttonUniv :{
		height: 45,
		width:'90%',
		backgroundColor:colors.secondary,
		borderRadius:5,
		justifyContent:'center',
		margin:5
	},
	button :{
		color: '#fff',
		fontSize:width*0.05,
		fontWeight:'bold',
		alignSelf:'center'
	},
	retour:{
		marginLeft:20,
		flexDirection:'row',
		alignItems:'center',
		marginBottom:20
	}
});

export default ListingDetailsScreen;
