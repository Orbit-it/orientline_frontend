import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from "../config/colors";
import routes from '../navigation/routes';

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');


const InsIpsas = ({navigation}) => {


    return (
        <SafeAreaView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
    
            <View style={styles.middle}>
                 <Image
                style={styles.tunisie_flag}
                source={require("../assets/ipsas_logo.jpg")}
                 />
                 <View style={styles.in_middle}>
                    <Text style={styles.title} >L'institution</Text>
                 </View>
            </View>

            <View style = {styles.bar}/>  

            <View style={styles.footer}>
                <Text style={styles.subtitle_footer} >
                L’institut polytechnique privé des
                Sciences Avancées de Sfax (IPSAS)
                leader Sfaxien de l’enseignement
                supérieur privé depuis près de trois
                décennies.
                {"\n"}
                {"\n"}
                En choisissant l’IPSAS, vous faites le
                choix d’apprendre à penser, à réagir
                et à gérer des situations. Grace à un
                corps enseignant totalement
                impliqué dans ce processus
                d’acquisition d’une méthode en plus
                des connaissances, l’IPSAS peut
                d’ores et déjà être fière de ses
                diplômés qui font carrières en
                Tunisie et partout en Afrique et dans
                le monde.
                </Text>
            </View>

                <TouchableOpacity 
                    style={[styles.bref]}
                    onPress={()=>{navigation.navigate(routes.FDIPSAS)}}>
                        <Text style={styles.text_btn}> Filières et débouchées </Text> 
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:2/3,
        backgroundColor:'#00B0F0',
        alignItems:'center',
        justifyContent:'center'
    },
    footer:{
        flex:1
        
    },
    middle:{
        flexDirection:"row",
        margin:10
    },
    in_middle:{
        margin:10,
        marginLeft:20,
        alignContent:'center'
    },
    cover_image:{
        height:200,
        width:200,
        borderRadius:100,
        margin:20,
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
        alignContent:"center",
        alignSelf:"center",
        marginTop:10
    },
    subtitle:{
        fontSize:width*0.04,
        color:"grey"
    },
    title_footer:{
        fontSize:width*0.05,
        fontWeight:'bold',
        margin:15
    },
    subtitle_footer:{
        fontSize:width*0.05,
        color:"grey",
        marginLeft:15,
        marginBottom:20
    },
    interline_footer:{
        fontSize:20,
        fontWeight:"bold",
        color:"grey",
        margin:15
    },
    row_value:{
        flexDirection:'row',
    },
    interline_value:{
        fontSize:20,
        color:"grey",
        margin:15,
    },
    bar:{
        borderBottomWidth:1,
        borderBottomColor:'#F2F3F4',
        marginHorizontal:7,
        marginTop:10
    },
      text_btn: {
        fontSize: 18,
        color:'grey',
        fontWeight:'bold',
        textAlign:'center'
      },
      bref:{
        marginTop:20,
        marginBottom:10,
        width: '90%',
        height: width*0.12,
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth:1,
        marginHorizontal:10,
        marginLeft:18,
        borderColor:colors.primary,
        backgroundColor:"white"
    },
});


export default InsIpsas;
