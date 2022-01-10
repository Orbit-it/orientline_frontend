import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import Policy from "../screens/Policy";

const Stack = createStackNavigator();

const AuthNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Welcome"
			component={WelcomeScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen name="Connexion" component={LoginScreen} />
		<Stack.Screen name="Inscription" component={RegisterScreen} />
		<Stack.Screen name="Policy" component={Policy} />
	</Stack.Navigator>
);

export default AuthNavigator;
