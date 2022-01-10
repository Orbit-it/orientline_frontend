import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/Text";
import Button from "../components/Button";
import Card from "../components/Card";
import ScreenForListing from "../components/ScreenForListing";
import useAuth from "../auth/useAuth"
//import userManagerFunction from './AccountScreen';
//  {(user.accountType == 'Particulier')?<Text>{user.accountType}</Text>:<Text>render false</Text>}

import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import useApi from "../hooks/useApi";
import { set } from "react-native-reanimated";
import { ListItemDeleteAction } from "../components/lists";

function ListingsScreen({ navigation }) {
	const getListingsApi = useApi(listingsApi.getListings);
	const [posts, setPosts] = useState(getListingsApi.data)
	const { user, logOut } = useAuth();
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (listing) =>{
		//delet post from the list of posts
		setPosts(posts.filter((l) => l.id !== listing.id))
	}
	

	useEffect(() => {
		getListingsApi.request();
	}, []);

	

	return (
		<>
			<ActivityIndicator visible={getListingsApi.loading} />
			<ScreenForListing style={styles.screen}>
				{getListingsApi.error && (
					<>
						<AppText>Error: Page non actualiser!.</AppText>
						<Button
							title="Réessayer"
							onPress={getListingsApi.request}
						/>
					</>
				)}
				<FlatList
        		data={getListingsApi.data}
        		keyExtractor={(listing) => listing.id.toString()}
        		renderItem={({ item }) => (	
					<Card
						institute={item.institute}
						profile={item.images[0].url}
						title={item.title}
						subTitle={item.description}
						imageUrl={item.images[1].url}
						onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
					/>
					)}
					refreshing={refreshing}
					onRefresh={() => {
						setPosts(getListingsApi.request());
					}}
					/>
				{/*(user.accountType == 'Particulier')?<Text>{user.accountType}</Text>:<Text>render false</Text>*/}
			</ScreenForListing>
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 10,
		backgroundColor: colors.light,
	},
});

export default ListingsScreen;



