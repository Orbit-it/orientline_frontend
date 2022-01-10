import React, { useState } from "react";
import { StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity, Text, ScrollView} from "react-native";
import * as Yup from "yup";
import { AntDesign } from "@expo/vector-icons";

import Screen from "../components/Screen";
import {
	ErrorMessage,
	Form,
	FormField,
	SubmitButton,
} from "../components/forms";

import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import { SafeAreaView } from "react-native-safe-area-context";

const validationSchema = Yup.object().shape({
	email: Yup.string().required("Veuillez entrer votre adresse mail").label("Email"),
	password: Yup.string().required("Veuillez entrer votre mot de passe").min(5).label("Password"),
});

function LoginScreen(props) {
	const auth = useAuth();
	const [loginFailed, setLoginFailed] = useState(false);

	const [data, setData] = React.useState({
        secureTextEntry: true,
    });

	const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

	const handleSubmit = async ({ email, password }) => {
		const result = await authApi.login(email, password);
		if (!result.ok) return setLoginFailed(true);
		setLoginFailed(false);
		auth.logIn(result.data);
	};

	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/ol.png")} />
			<SafeAreaView>
			<Form
				initialValues={{ email: "", password: "" }}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<ErrorMessage
					error="Verfiez vos identifiants et/ou votre connexion internet !"
					visible={loginFailed}
				/>
				<FormField
					
					autoCapitalize="none"
					autoCorrect={false}
					icon="email"
					name="email"
					placeholder="Email"
					textContentType="emailAddress"
					keyboardType="email-address"
				/>
				<FormField

					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					name="password"
					placeholder="Mot de passe"
					textContentType="password"
					showOrHidePasswd = {true} //showOrHidePasswd and showPass parameters is required to show the icon and hundle the shown or hiden action
					showPass="eye" //showOrHidePasswd and showPass parameters is required to show the icon and hundle the shown or hiden action
				/>

				<SubmitButton title="Connexion" />

			</Form>
			</SafeAreaView>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		resizeMode:'contain',
		width: 200,
		height: 200,
		alignSelf: "center",
		marginTop: 20,
	},
	form: {
		width: '80%',
		borderWidth: 1,
		borderColor: 'blue',
		borderRadius: 5
	}
});

export default LoginScreen;
