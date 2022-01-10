import React, { useState } from "react";
import { StyleSheet, Image, KeyboardAvoidingView, Text, TouchableOpacity, Dimensions } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import {
	ErrorMessage,
	Form,
	FormField,
	FormPicker,
	SubmitButton,
} from "../components/forms";
import ActivityIndicator from "../components/ActivityIndicator";

import colors from "../config/colors";

import authApi from "../api/auth";
import useAuth from "../auth/useAuth";  
import useApi from "../hooks/useApi";
import usersApi from "../api/users";
import routes from "../navigation/routes";

const {width} = Dimensions.get("screen");
const {height} = Dimensions.get("screen");

const validationSchema = Yup.object().shape({
	nationality: Yup.object().required("Veuillez selectionner votre nationalité").label("Nationality"),
	name: Yup.string().matches().required("Veuillez entrer votre nom complet").label("Name"),
	email: Yup.string().email("Format email incorrect").required("Veuillez entrer votre adresse email").test("Validate Email", "Format email incorrect",(value) => {const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  return re.test(String(value).toLowerCase())}),
	password: Yup.string().required("Veuillez entrer un mot de passe").min(4).label("Password"),
});

function RegisterScreen({navigation}) {
	const registerApi = useApi(usersApi.register);
	const loginApi = useApi(authApi.login);
	const auth = useAuth();
	const [error, setError] = useState();

	const pays = [
		
		{
			label: "Afrique du Sud",
			value: 0,
		},
		{
			label: "Algérie",
			value: 1,
		},
		{
			label: "Angola",
			value: 2,
		},
		{
			label: "Bénin",
			value: 3,
		},
		{
			label: "Botswana",
			value: 4,
		},
		{
			label: "Burkina Faso",
			value: 5,
		},
		{
			label: "Burundi",
			value: 6,
		},
		{
			label: "Cameroun",
			value: 7,
		},
		{
			label: "Cap-Vert",
			value: 8,
		},
		{
			label: "République centrafricaine",
			value: 9,
		},
		{
			label: "Comores",
			value: 10,
		},
		{
			label: "République du Congo",
			value: 11,
		},
		{
			label: "République Démocratique du Congo",
			value: 12,
		},
		{
			label: "Côte d’Ivoire",
			value: 13,
		},
		{
			label: "Djibouti",
			value: 14,
		},
		{
			label: "Égypte",
			value: 15,
		},
		{
			label: "Érythrée",
			value: 16,
		},
		{
			label: "Eswatini",
			value: 17,
		},
		{
			label: "Éthiopie",
			value: 18,
		},
		{
			label: "Gabon",
			value: 19,
		},
		{
			label: "Gambie",
			value: 20,
		},
		{
			label: "Ghana",
			value: 21,
		},
		{
			label: "Guinée",
			value: 22,
		},
		{
			label: "Guinée-Bissau",
			value: 23,
		},
		{
			label: "Guinée équatoriale",
			value: 24,
		},
		{
			label: "Kenya",
			value: 25,
		},
		{
			label: "Lesotho",
			value: 26,
		},
		{
			label: "Liberia",
			value: 27,
		},
		{
			label: "Libye",
			value: 28,
		},
		{
			label: "Madagascar",
			value: 29,
		},
		{
			label: "Malawi",
			value: 30,
		},
		{
			label: "Mali",
			value: 31,
		},
		{
			label: "Maroc",
			value: 32,
		},
		{
			label: "Maurice",
			value: 33,
		},
		{
			label: "Mauritanie",
			value: 34,
		},
		{
			label: "Mozambique",
			value: 35,
		},
		{
			label: "Namibie",
			value: 36,
		},
		{
			label: "Niger",
			value: 37,
		},
		{
			label: "Nigeria",
			value: 38,
		},
		{
			label: "Ouganda",
			value: 39,
		},
		{
			label: "Rwanda",
			value: 40,
		},
		{
			label: "São Tomé-et-Principe",
			value: 41,
		},
		{
			label: "Sénégal",
			value: 42,
		},
		{
			label: "Seychelles",
			value: 43,
		},
		{
			label: "Sierra Leone",
			value: 44,
		},
		{
			label: "Somalie",
			value: 45,
		},
		{
			label: "Soudan",
			value: 46,
		},
		{
			label: "Soudan du Sud",
			value: 47,
		},
		{
			label: "Tanzanie",
			value: 48,
		},
		{
			label: "Tchad",
			value: 49,
		},
		{
			label: "Togo",
			value: 50,
		},
		{
			label: "Tunisie",
			value: 51,
		},
		{
			label: "Zambie",
			value: 52,
		},
		{
			label: "Zimbabwe",
			value: 53,
		},

	];

	const handleSubmit = async (userInfo) => {
		const result = await registerApi.request(userInfo);

		if (!result.ok) {
			if (result.data) setError(result.data.error);
			else {
				setError("Verifiez votre connexion internet puis réessayer!");
				console.log(result);
			}
			return;
		}

		const { data: authToken } = await loginApi.request(
			userInfo.email,
			userInfo.password
		);
		auth.logIn(authToken);
	};

	return (
		<>
			<ActivityIndicator
				visible={registerApi.loading || loginApi.loading}
			/>
			<Screen style={styles.container}>
				<Form
					initialValues={{ nationality: "", name: "", email: "", password: "" }}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					<ErrorMessage error={error} visible={error} />
					<FormPicker
						name="nationality"
						placeholder="Nationalité" //liste déroulante
						items={pays}
						PickerItemComponent={CategoryPickerItem}
				
					/>
					<KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} >
					<FormField
						autoCorrect={false}
						icon="account"
						name="name"
						placeholder="Nom"
						secureTextEntry={false}
					/>
					<FormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="email"
						keyboardType="email-address"
						name="email"
						placeholder="Email                  "
						textContentType="emailAddress"
					/>
					<FormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="lock"
						name="password"
						placeholder="Mot de passe"
						showOrHidePasswd = {true} //showOrHidePasswd and showPass parameters is required to show the icon and hundle the shown or hiden action
						showPass="eye" //showOrHidePasswd and showPass parameters is required to show the icon and hundle the shown or hiden action
						textContentType="password"
					/>
					</KeyboardAvoidingView>
					<SubmitButton title="Inscription" />
				</Form>

				<TouchableOpacity style={styles.retour} onPress={() => navigation.navigate(routes.POLICY)} >
						<Text style={{color:colors.secondary, margin:5, fontSize:width*0.04}} > <Text style={{color:"grey"}} >En vous inscrivant vous accepter nos</Text> Conditions et politiques de confidentialité</Text>
				</TouchableOpacity>

				<Image style={styles.logo} source={require("../assets/ol.png")} />

			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		resizeMode:'contain',
		width: 150,
		height: 150,
		alignSelf: "center",
		marginTop: 50,
	},
});

export default RegisterScreen; 
