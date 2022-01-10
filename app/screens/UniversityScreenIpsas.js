import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar, Dimensions, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import navigationTheme from '../navigation/navigationTheme';
import colors from "../config/colors";
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import CarouselImage from "../components/CarouselImage";
import CarouselImageIpsas from '../components/CarouselImageIpsas';
import routes from '../navigation/routes';
import ListingDetailsScreen from "./ListingDetailsScreen"




const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');

const nameContryMarginTop = (2/8)*height;

function UniversityScreenIpsas({navigation}){
  

 var universityToken = 'ipsas'   

    return (
        <View style={styles.container} >
        <View style={styles.header}> 
            <Image
            style={styles.cover_image}
                source={require("../assets/"+universityToken+".jpg")}
            />
        </View>  

        <View style={styles.footer}>
        <View style={styles.middle}>
             <Image
            style={styles.tunisie_flag}
            source={require("../assets/ipsas_logo.jpg")}
             />
             <View style={styles.in_middle}>
                <Text style={styles.title} >IPSAS Sfax</Text>
             </View>
             <TouchableOpacity 
                    style={[styles.bref]}
                    onPress={()=>{navigation.navigate(routes.INSIPSAS)}}>
                        <Text style={styles.text_btn}> L'institution </Text> 
                </TouchableOpacity>
        </View>
        <CarouselImageIpsas/>
        </View>
        </View>
    )

};

export default UniversityScreenIpsas;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:2/5 ,
        //height:height*0.25,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    footer:{
        justifyContent:'center',
        alignItems:'center',
        flex:3/5,
        
    },
    middle:{
        flexDirection:"row",
        marginLeft:10,
       // marginBottom:10,
        marginTop:10
    },
    in_middle:{
        margin:10,
        alignContent:'center',
        justifyContent:'center'
    },
    cover_image:{
        height:width*0.67,
        resizeMode:"contain"
    },
    tunisie_flag:{
        height:width*0.18,
        width:width*0.18,
        borderRadius:(width*0.18)/2,
        borderWidth:1,
        borderColor:"#EFE6E5"
        
    },
    title:{
        fontSize:width*0.05,
        fontWeight:'bold',
        justifyContent:"center",
        alignContent:"center"
    },
    subtitle:{
        fontSize:18,
        color:"grey"
    },
    bar:{
        borderBottomWidth:1,
        borderBottomColor:'#F2F3F4',
        marginHorizontal:7,
    },
    bref:{
        marginTop:10,
        marginBottom:10,
        width: '40%',
        height: width*0.12,
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth:1,
        marginLeft:10,
        borderColor:colors.primary,
        backgroundColor:"white"
    },
    info:{
        marginTop:10,
        marginBottom:10,
        marginRight:10,
        width: '50%',
        height: width*0.12,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        borderWidth:1,
        borderColor:colors.primary,
        backgroundColor:"white"
      },
      text_btn: {
        fontSize: width*0.04,
        color:'grey',
        fontWeight:'bold',
        textAlign:'center'
      },
});

