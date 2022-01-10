import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import Candidature from "../screens/Candidature";
import CandidatureAdmin from "../screens/CandidatureAdmin";
import PostuleScreen from "../screens/PostuleScreen";
import UniversityScreen from "../screens/UniversityScreen";
import UniversityScreenIpsas from "../screens/UniversityScreenIpsas";
import CountryScreen from "../screens/CountryScreen";
import TunisieEnBref from "../screens/TunisieEnBref";
import InfoUtiles from "../screens/InfoUtiles";
import InsEseac  from "../screens/InsEseac";
import InsIpsas from "../screens/InsIpsas";
import fdEseac from "../screens/fdEseac";
import fdIpsas from "../screens/fdIpsas";
import UniversityScreenLasall from "../screens/UniversityScreenLasall";
import InsLasall from "../screens/InsLasall";
import fdlasall from "../screens/fdlasall";
const Stack = createStackNavigator();

const FeedNavigator = () => (
	<Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
		<Stack.Screen name="Listings" component={ListingsScreen} />
		<Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
		<Stack.Screen name="Postuler" component={PostuleScreen} />
		<Stack.Screen name="Country" component={CountryScreen} />
		<Stack.Screen name="TunisieEnBref" component={TunisieEnBref} />
		<Stack.Screen name="InfoUtiles" component={InfoUtiles} />
		<Stack.Screen name="University" component={UniversityScreen} />
		<Stack.Screen name="InsEseac" component={InsEseac} />
		<Stack.Screen name="fdEseac" component={fdEseac} />
		<Stack.Screen name="UniversityScreenIpsas" component={UniversityScreenIpsas} />
		<Stack.Screen name="UniversityScreenLasall" component={UniversityScreenLasall} />
		<Stack.Screen name="InsLasall" component={InsLasall} />
		<Stack.Screen name="InsIpsas" component={InsIpsas} />
		<Stack.Screen name="fdIpsas" component={fdIpsas} />
		<Stack.Screen name="fdlasall" component={fdlasall} />
		<Stack.Screen name="Candidature" component={Candidature} />
		<Stack.Screen name="CandidatureAdmin" component={CandidatureAdmin} />
	</Stack.Navigator>
);

export default FeedNavigator;
