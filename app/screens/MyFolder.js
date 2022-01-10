import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import ScreenForListing from "../components/ScreenForListing";
import useAuth from "../auth/useAuth";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";

const menuItems = [  
	{
		title: "Mes candidatures",
		icon: {
			name: "folder",
			backgroundColor: colors.primary,
		},
		targetScreen: routes.CANDIDATURES
	},
];


function MyFolder({ navigation }) {
	const { user, logOut } = useAuth();

	//let pp = (user.nationality.label == 'Administrateur') ? "../assets/useradmin.jpg": "../assets/defaultuser.jpg"

	return (
		<ScreenForListing style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title={"NOM DU CANDIDAT: "+user.name}
					subTitle={"PAYS D'ORIGINE: "+user.nationality.label}
                    email={"ADRESSE MAIL: "+user.email}
					//image={require("../assets/defaultuser.jpg")}
					onPress={() =>{}} // Ajouter un profil pour les versions superieures
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
							onPress={() =>
								navigation.navigate(routes.CANDIDATURE)
							}
						/>
					)}
				/>
			</View>
			<ListItem
				title="Déconnexion"
				IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
				onPress={() => logOut()}
			/>
		</ScreenForListing>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		marginVertical: 20,
	},
});

export default MyFolder;
