import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View} from "react-native";

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
import CardProgramForUser from "../components/CardProgramForUser";
import userProfile from "../api/userProfile";
import { TouchableOpacity } from "react-native-gesture-handler";

function CandidatureScreen({ navigation }) {
	const {user} = useAuth()
	const getcandidaturesApi = useApi(candidaturesApi.getcandidatures);
	const [posts, setPosts] = useState(getcandidaturesApi.data)
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (listing) =>{
		//delet post from the list of posts
		setPosts(posts.filter((l) => l.id !== listing.id))
	}
	

	useEffect(() => {
		getcandidaturesApi.request();
	}, []);


	const dataFilter = getcandidaturesApi.data.filter(function(item){
		return item.email == user.email;
	 }).map(function({title,institute,user,email,nationality,id}){
		 return {title,institute,user,email,nationality,id};
	 });

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

				<Text style={styles.l_tilte} >Mes candidatures</Text>

				<FlatList
        		data={dataFilter}
				keyExtractor={(data) => data.id.toString()}
				ListEmptyComponent={<View style={styles.view}>
					<TouchableOpacity
					style={styles.btn}
					onPress={()=>{navigation.navigate(routes.LISTINGS)}}
					>
						<Text  style={styles.btn_txt}>POSTULER</Text>
					</TouchableOpacity>
				</View>}
        		renderItem={({item}) => (
					<CardProgramForUser
						title={item.title}
						institute={item.institute}
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
	view:{
		flex:1,
		justifyContent:"center",
		alignContent:"center",
		alignSelf:"center"
	},
	btn :{
		height: 200,
		width:200,
		backgroundColor:'#00B0F0',
		borderRadius:100,
		//marginLeft:80,
		justifyContent:'center',
		alignItems:'center',
		marginTop:100,
		marginBottom:500,
		elevation:100,
	},
	btn_txt :{
		color: '#fff',
		fontSize:25,
		fontWeight:'bold',
	},
	list_tilte:{
		padding:10,
		textAlign:"center",
		fontSize:20,
		color:"#000",
		fontWeight:"bold",
		marginBottom:20
	},
	l_tilte:{
		borderColor:"#C6BFBE",
		borderWidth:1,
		borderRadius:10,
		padding:10,
		fontSize:25,
		textAlign:"center",
		color:"grey",
		fontWeight:"bold",
		marginBottom:20
	},
});

export default CandidatureScreen;



