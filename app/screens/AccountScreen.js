import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";
import ScreenForListing from "../components/ScreenForListing";

const menuItems = [
	{
		title: "Candidatures",
		icon: {
			name: "clipboard-list",
			backgroundColor: colors.primary,
		},
		targetScreen: routes.CANDIDATURES
	},
];


function AccountScreen({ navigation }) {
	const { user, logOut } = useAuth();

	//let pp = (user.nationality.label == 'Administrateur') ? "../assets/useradmin.jpg": "../assets/defaultuser.jpg"

	return (
		<ScreenForListing style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title={user.name}
					subTitle={user.nationality.label}
					image={require("../assets/defaultuser.jpg")}
					onPress={() =>
						navigation.navigate(routes.PROFILE)
					}
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
								navigation.navigate(routes.ALLCANDIDATS)
							}
						/>
					)}
				/>
			</View>
			<ListItem
				title="Deconnexion"
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

export default AccountScreen;
