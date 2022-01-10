import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text, Dimensions } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');

function WelcomeScreen({ navigation }) {
	return (
		<ImageBackground
			blurRadius={6}
			style={styles.background}
			source={require("../assets/flsh.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require("../assets/ol.png")}
				/>
				<Text style={styles.tagline}><Text style={{fontWeight:'bold'}}>Bienvenue sur Orientline, </Text>
			de l'obtention du Bac à l'insertion sur le marché de l'emploi</Text>
				
			</View>

			<View style={styles.buttonsContainer}>
				<Button
					title="Connexion"
					onPress={() => navigation.navigate(routes.LOGIN)}
				/>
				<Button
					title="Inscription"
					color="secondary"
					onPress={() => navigation.navigate(routes.REGISTER)}
				/>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	buttonsContainer: {
		width: "100%",
		padding: 20,
	},
	logo: {
		resizeMode:'contain',
		width: height*1/3,
		height: height*0.2,
		borderRadius:10
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
	tagline: {
		fontSize: height*0.025,
		textAlign:'center',
		fontWeight: "bold",
		//paddingVertical: 20,
		color:'#fff',
		marginLeft:15,
		marginRight:15,
		//position:"absolute",
		marginTop: height - height*0.9 //calculé en fonction de la hauteur de l'ecran
	},
	taglinepseudo:{
		fontSize: 20,
		textAlign:'center',
		fontWeight: "bold",
		color:'#fff',
		margin:5
	}
});

export default WelcomeScreen;
