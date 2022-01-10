import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from "../config/colors";


const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');

const InfoUtiles = () => {

    const data_image = [
        require("../assets/tunisie/1.jpg")
    ]

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
    
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

            <View style = {styles.bar}/>  

            <View style={styles.footer}>
                <Text style={styles.title_footer} >Infos utiles</Text>
                <Text style={styles.subtitle_footer} >
                Le respect des règles de séjour sur le
                territoire tunisien est un impératif pour
                les étrangers en Tunisie. Tout étranger
                séjournant ou résidant en Tunisie est
                invité à être vigilant à cet égard. Les
                dépassements de séjour sont soumis
                au paiement de pénalités.
                </Text>
                <View style = {styles.bar}/>


            </View>
                <Text style={styles.title_footer} >Obtention de la carte de séjour</Text>
                <Text style={styles.subtitle_footer} >
                Au-delà de trois mois consécutifs de
                résidence après votre arrivée en
                Tunisie, vous devez solliciter une
                autorisation de séjour au commissariat
                dont dépend votre lieu d’habitation.
                {'\n'}
                {'\n'}
                A part le formulaire à remplir, les
                documents à fournir sont :
                </Text>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text> Les attestations d’inscription,
                    de paiement des frais de
                    scolarité ainsi que de présence
                    fournies par l’université et/ou
                    le centre de formation. </Text>
                
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text> Le contrat de location / ou en
                    cas de logement en foyer
                    universitaire, une attestation
                    de résidence. </Text>
               
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text> Un justificatif des ressources
                    en banque et/ou une
                    attestation de prise en charge.</Text>
            
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text> Paiement d’une quittance de
                    75 Dinars pour les étudiants.</Text>
                </View>

                <Text style={styles.subtitle_footer} >
                La délivrance de votre carte de séjour
                définitive varie entre 2 et 3 mois. Elle
                sera valable au maximum 1 an, vous
                pourrez ensuite la renouveler chaque
                année pour 1 ans.
                </Text>

                <Text style={styles.title_footer} >Contacts utiles</Text>

                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Vaccination contre la COVID-19 :  <Text style={styles.number} >8010 2021</Text>
                     </Text>
                </View>
                <Text style={styles.interline_footer} >En cas d’urgence santé, problème
                de vol, accident, agression,
                incendie :</Text>

                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    SAMU :  <Text style={styles.number} >190</Text> ou <Text style={styles.number} >71 589 461</Text>
                     </Text>
                </View>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    SOS MED :  <Text style={styles.number} >71 744 215</Text>
                     </Text>
                </View>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Police secours :  <Text style={styles.number} >197</Text>
                     </Text>
                </View>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Protection civile :  <Text style={styles.number} >198</Text>
                     </Text>
                </View>

                <Text style={styles.interline_footer} >
                En cas de violence et abus pour
                femme, mineur ou toute autre
                personne en situation de
                vulnérabilité :
                </Text>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Association tunisienne des
                    femmes démocrates :  <Text style={styles.number} >71 321 339</Text>
                     </Text>
                </View>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Maison du droit et des
                    migrations :  <Text style={styles.number} >71 287 484</Text>
                     </Text>
                </View>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Association AMAL :  <Text style={styles.number} >71 286 372</Text>
                     </Text>
                </View>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Office national de la famille et
                    de la population :  <Text style={styles.number} >71 577 000</Text>
                     </Text>
                </View>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Ligue tunisienne des droits
                    de l’homme :  <Text style={styles.number} >71 258 001</Text>
                     </Text>
                </View>
                <Text style={styles.interline_footer} >
                En cas d’abus et violation de
                droits :
                </Text>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Organisation internationale
                    pour les migrations : 
                    <Text style={styles.number} > 80 101 566
                    </Text> ou  <Text style={styles.number} >71 860 312</Text>
                     </Text>
                </View>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Maison du droit et des
                    migrations :  <Text style={styles.number} >71 287 484</Text>
                     </Text>
                </View>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Croissant rouge :  <Text style={styles.number} >71 230 396</Text>
                     </Text>
                </View>
                <Text style={styles.interline_footer} >
                Aide au retour volontaire dans son
                pays d’origine :
                </Text>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Organisation internationale
                    pour les migrations : 
                    <Text style={styles.number} > 80 101 566
                    </Text> ou  <Text style={styles.number} >71 860 312</Text>
                     </Text>
                </View>

                <View style = {styles.bar}/>

                <Text style={styles.interline_footer} >
                Autres contacts utiles
                </Text>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    SOS Médecin :  <Text style={styles.number} >71 744 215</Text>
                     </Text>
                </View>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    SOS Ambulance :  <Text style={styles.number} >71 725 555 </Text> ou
                    <Text style={styles.number} > 599 900</Text>
                     </Text>
                </View>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Urgence secours :  <Text style={styles.number} >71 351 500</Text>
                     </Text>
                </View>
                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Numéro vert COVID :  <Text style={styles.number} >80 101
                    919</Text>
                     </Text>
                </View>

                <View style = {styles.bar}/>

                <View style={styles.puce_item} >
                    <Text style={styles.text_puce} ><Text style={styles.puce} >o  </Text>
                    Association des Étudiants et
                    Stagiaires Africains en Tunisie
                    (AESAT) :  <Text style={styles.number} >56 353 517</Text>
                     </Text>
                </View>

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
    title_footer:{
        fontSize:width*0.05,
        fontWeight:'bold',
        margin:15
    },
    subtitle_footer:{
        fontSize:width*0.04,
        color:"grey",
        marginLeft:15,
        marginRight:10,
        marginBottom:20,
        justifyContent:"space-between"
    },
    interline_footer:{
        fontSize:width*0.04,
        fontWeight:"bold",
        color:"grey",
        margin:15
    },
    row_value:{
        flexDirection:'row',
    },
    interline_value:{
        fontSize:width*0.04,
        color:"grey",
        margin:15,
    },
    bar:{
        borderBottomWidth:1,
        borderBottomColor:'#F2F3F4',
        marginHorizontal:7,
        margin:10
    },
      text_btn: {
        fontSize: width*0.04,
        color:'grey',
        fontWeight:'bold',
        textAlign:'center'
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
        margin:5
    },
        puce_item:{
        marginLeft:25,
        marginRight:20,
        
    },
    
});


export default InfoUtiles;
