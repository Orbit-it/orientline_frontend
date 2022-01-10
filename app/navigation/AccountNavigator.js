import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from '../screens/ProfileScreen';
import CandidatScreen from "../screens/CandidatScreen";
import Candidature from "../screens/Candidature";

const Stack = createStackNavigator();

const AccountNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name="Account" component={AccountScreen} />
		<Stack.Screen name="Messages" component={MessagesScreen} />
		<Stack.Screen name="Profile" component={ProfileScreen} />
		<Stack.Screen name="Candidatures" component={CandidatScreen} />
		<Stack.Screen name="Candidature" component={Candidature} />
	</Stack.Navigator>
);

export default AccountNavigator;
