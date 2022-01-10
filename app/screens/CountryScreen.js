import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, Scrol } from 'react-native';
import colors from "../config/colors";
import CarouselImage from "../components/CarouselImage";
import routes from '../navigation/routes';

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');

const CountryScreen = ({navigation}) => {

    const data_image = [
        require("../assets/tunisie/1.jpg")
    ]

    return (
        <View style={styles.container} >
            <View style={styles.header}> 
                <Image
                style={styles.cover_image}
                    source={require("../assets/cover.jpg")}
                />
            </View>

            <View style={styles.middle}>
                 <Image
                style={styles.tunisie_flag}
                source={require("../assets/flag.jpg")}
                 />
                 <View style={styles.in_middle}>
                    <Text style={styles.title} >TUNISIE</Text>
                    <Text style={styles.subtitle} >Pays en Afrique du Nord</Text>
                 </View>
            </View>

            <View /* bouton  */ style={{flexDirection:'row', justifyContent:'space-between'}} >
                    <TouchableOpacity 
                        style={[styles.bref]}
                        onPress={()=>{navigation.navigate(routes.TUNISIE_EN_BREF)}}>
                            <Text style={styles.text_btn}> La Tunisie en bref </Text> 
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[styles.info,{
                    borderWidth: 1}]}
                    onPress={() => {navigation.navigate(routes.INFO_UTILES)}}>
                    <Text style={styles.text_btn}>Infos utiles</Text>
                </TouchableOpacity> 

            </View>  

            <View style={styles.footer}>
            <CarouselImage/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:2/5,
        backgroundColor:'#00B0F0',
        alignItems:'center',
        justifyContent:'center'
    },
    footer:{
        justifyContent:'center',
        alignItems:'center',
        flex:3/5
        
    },
    middle:{
        flexDirection:"row",
        marginTop:10
    },
    in_middle:{
        margin:10,
        alignContent:'center'
    },
    cover_image:{
        height:'100%',
        resizeMode:"contain"
    },
    tunisie_flag:{
        height:width*0.18,
        width:width*0.18,
        borderRadius:(width*0.18)/2,
        borderWidth:1,
        borderColor:"#EFE6E5",
        marginLeft:10
        
    },
    title:{
        fontSize:width*0.05,
        fontWeight:'bold',
        justifyContent:"center",
        alignContent:"center"
    },
    subtitle:{
        fontSize:15,
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


export default CountryScreen;
