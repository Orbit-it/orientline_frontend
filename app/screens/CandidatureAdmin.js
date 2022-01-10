import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/Text";
import Button from "../components/Button";
import CardProgramm from "../components/CardProgramm";
import ScreenForListing from "../components/ScreenForListing";
import useAuth from "../auth/useAuth"
import colors from "../config/colors";
import candidaturesApi from "../api/candidatures";
import routes from "../navigation/routes";
import useApi from "../hooks/useApi";
import { set } from "react-native-reanimated";
import { ListItemDeleteAction } from "../components/lists";

function CandidatureAdmin({ navigation }) {
	const getcandidaturesApi = useApi(candidaturesApi.getcandidatures);
	const [posts, setPosts] = useState(getcandidaturesApi.data)
	const { user, logOut } = useAuth();
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (listing) =>{
		//delet post from the list of posts
		setPosts(posts.filter((l) => l.id !== listing.id))
	}
	

	useEffect(() => {
		getcandidaturesApi.request();
	}, []);

	return (
		<>
			<ActivityIndicator visible={getcandidaturesApi.loading} />
			<ScreenForListing style={styles.screen}>
				{getcandidaturesApi.error && (
					<>
						<AppText>Error: Page non actualiser!.</AppText>
						<Button
							title="Ressayer"
							onPress={getcandidaturesApi.request}
						/>
					</>
				)}
				<FlatList
        		data={getcandidaturesApi.data}
				keyExtractor={(data) => data.id.toString()}
        		renderItem={({ item }) => (
					<CardProgramm
						institute={item.institute}
                        title={item.title}
                        user={item.user}
                        email={item.email}
                        nationality={item.nationality}
					/>
					)}
					refreshing={refreshing}
					onRefresh={() => {
						setPosts(getcandidaturesApi.request());
					}}
					/>
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

export default CandidatureAdmin;



