import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons";
import { AntDesign } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import useAuth from "../auth/useAuth";
import FeedNavigator from "./FeedNavigator";
import ListingsScreen from "../screens/ListingsScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

import ListingEditScreen from "../screens/ListingEditScreen";
import Candidature from "../screens/Candidature";
import MyFolder from "../screens/MyFolder";
import useNotifications from "../hooks/useNotifications";
import CountryScreen from "../screens/CountryScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	useNotifications();
	const {user} = useAuth();

	return (
		<Tab.Navigator 
		>
			<Tab.Screen
				name="Acceuil"
				component={FeedNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign
							name="home"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen // if admin (listingEdit) else (my candidature)
				name={(user.nationality.label == "Administrateur")? "Publier" : "La Tunisie"}
				component={ (user.nationality.label == "Administrateur")? ListingEditScreen : CountryScreen} 
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name= {(user.nationality.label == "Administrateur")? "plus-circle" : "flag-variant-outline"}
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen // if admin (AccountNavigator) else (MyFolder)
				name={(user.nationality.label == "Administrateur")? "OrientLine" : "Mon Profil"}
				component={(user.nationality.label == "Administrateur")? AccountNavigator : MyFolder}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign
							name="user"
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
