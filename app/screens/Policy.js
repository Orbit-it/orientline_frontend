import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import routes from '../navigation/routes';
import colors from "../config/colors";

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen')

const Policy = ({navigation}) => {


    return (
        <SafeAreaView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
    
            <View style={styles.middle}>
                 <View style={styles.in_middle}>
                    <Text style={styles.title} >Conditions et politiques de confidentialité</Text>
                 </View>
            </View>

            <View style = {styles.bar}/>  

            <View style={styles.footer}>
                <Text style={styles.text_puce} >
                Pour créer un compte OrientLine, vous devez accepter les conditions d'utilisation ci-dessous.
                De plus, lorsque vous créez un compte, nous traitons vos informations comme décrit ici dans notre Politique de confidentialité, y compris ces points clés :
                {"\n"}
                {"\n"}
                <Text style={{fontWeight:"bold"}} >Données que nous traitons lorsque vous utilisez OrientLine</Text>
                {"\n"}
                {"\n"}
                Lorsque vous créez un compte OrientLine, nous stockons les informations que vous nous fournissez, telles que votre nom, votre nationalité et votre adresse e-mail.
                Lorsque vous utilisez les services OrientLine pour faire des choses comme postuler à un ou plusieurs programmes d'études, nous stockons les informations que vous créez.
                Nous traitons ces données aux fins décrites dans notre politique, notamment pour :{"\n"} </Text>

                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Traiter votre candidature auprès de nos universités partenaires ;
                     </Text>
                     <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                     Aidez nos services à fournir un contenu plus utile et personnalisé, comme des programmes d'études et des universités plus pertinents;
                     </Text>
                     <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                     Améliorer la qualité de nos services et en développer de nouveaux ;
                     </Text>
                     <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                     Améliorer la sécurité en protégeant contre la fraude et les abus;
                     </Text>
                     <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                     Effectuer des analyses et des mesures pour comprendre comment nos services sont utilisés.
                     </Text>
                </View>
    
            </View>

                <TouchableOpacity 
                    style={[styles.retour]}
                    onPress={()=>{navigation.goBack()}}>
                        <Text style={{color:colors.secondary, margin:5, fontSize:width*0.04}}>Poursuivre l'inscription</Text> 
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
        justifyContent:"center"
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
        marginBottom:10
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
    retour:{
		marginLeft:20,
		flexDirection:'row',
		alignItems:'center',
		marginBottom:20
	},
    puce:{
        color:colors.primary,
        fontSize:width*0.04
    },
    number:{
      color:colors.secondary,
      fontSize:width*0.04
  },
    text_puce:{
      fontSize:width*0.04,
      color:"grey",
      margin:10
  },
      puce_item:{
      marginLeft:25,
      marginRight:20,
      
  },
});


export default Policy;
