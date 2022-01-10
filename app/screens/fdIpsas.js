import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from "../config/colors";

const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");

const fdIpsas = () => {


    return (
        <SafeAreaView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
    
            <View style={styles.middle}>
                 <Image
                style={styles.tunisie_flag}
                source={require("../assets/ipsas_logo.jpg")}
                 />
                 <View style={styles.in_middle}>
                    <Text style={styles.title} >Filiéres et Débouchées</Text>
                 </View>
            </View>

            <View style = {styles.bar}/>  
                <Image
                style={styles.cover_image}
                    source={require("../assets/Ipsas/Ipsas51.jpg")}
                />
                <Text style={styles.title_footer} >Genie Industriel</Text>
                <Text style={styles.subtitle_footer} >
                Ce cycle vous permettra d’accéder aux
                secteurs d’activité suivant : Textile,
                construction mécanique, matériel de
                transport, agro-alimentaire,
                pharmaceutique, énergétique, ingénierie
                et études technique informatique.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Ipsas/Ipsas52.jpg")}
                />
                <Text style={styles.title_footer} >Genie Pétrolier</Text>
                <Text style={styles.subtitle_footer} >
                Ce cycle vous permettra de travailler au
                poste de : Ingénieur gisement,
                ingénieur forage, ingénieur installations
                pétrolières, ingénieur exploitation,
                ingénieur recherche aval, ingénieur
                procédés.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Ipsas/Ipsas53.jpg")}
                />
                <Text style={styles.title_footer} >Mastère Environnement Sécurité Qualité</Text>
                <Text style={styles.subtitle_footer} >
                Ce cycle vous permettra de travailler au
                poste de : Responsable qualité,
                hygiène, sécurité, de chef de projets
                industriels, de responsable organisation
                et méthode, d’ingénieur procédés,
                d’ingénieur consultant, etc.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Ipsas/Ipsas54.jpg")}
                />
                <Text style={styles.title_footer} >Licence Electromecanique</Text>
                <Text style={styles.subtitle_footer} >
                Pour faire face à une compétition de
                plus en plus importante, les
                entreprises industrielles sont appelées
                plus que jamais à tirer profit des
                progrès technologiques dans le
                domaine du contrôle et de commande
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Ipsas/Ipsas55.jpg")}
                />
                <Text style={styles.title_footer} >Licence Informatique</Text>
                <Text style={styles.subtitle_footer} >
                Le métier d'informaticien s'est
                diversifié en une multitudes de
                fonctions spécialisées, touchant aux
                réseau, au développement
                informatique, à la sécurité des
                systèmes informatiques ou encore à
                l'infographie ou à l'ergonomie.
                                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Ipsas/Ipsas56.jpg")}
                />
                <Text style={styles.title_footer} >Genie Informatique</Text>
                <Text style={styles.subtitle_footer} >
                Ce cycle vous permettra de travailler au
                poste de : Architecte de système
                d’information, concepteur de système
                informatique, génie logiciel, Architecte
                des systèmes et de réseaux, chef de
                projet informatique, développeur de
                projet et intelligence artificielle,
                informaticien industriel, etc.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Ipsas/Ipsas57.jpg")}
                />
                <Text style={styles.title_footer} >Genie Energetique</Text>
                <Text style={styles.subtitle_footer} >
                Ce cycle vous permettra de travailler au
                poste de : Ingénieur d’études, de
                conception et de maintenance,
                auditeur des systèmes énergétiques,
                chargé d’études en analyse
                environnementale, etc.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Ipsas/Ipsas58.jpg")}
                />
                <Text style={styles.title_footer} >Genie Civil</Text>
                <Text style={styles.subtitle_footer} >
                Ce cycle vous permettra de travailler au
                poste de : Chef de chantier, conducteur
                de travaux, gestionnaire
                d’approvisionnement, technicien
                d’études, ingénieur en bâtiment,
                maître d’œuvre, chef d’équipe,
                ingénieur génie civil, ingénieur génie
                climatique.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Ipsas/Ipsas59.jpg")}
                />
                <Text style={styles.title_footer} >Genie Electrotechnique</Text>
                <Text style={styles.subtitle_footer} >
                Les diplômés, sont capables d’exercer
                des postes de responsabilité dans
                différentes spécialités, notamment
                l’Automatique, l’Electrotechnique,
                l’Electronique, l’Electronique de
                puissance, l’Informatique Industrielle,
                l’Instrumentation, les Mesures
                électriques, la Microélectronique, le
                Traitement de signal, l’Imagerie, etc.
                                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Ipsas/Ipsas60.jpg")}
                />
                <Text style={styles.title_footer} >Diplôme National d'Architecte</Text>
                <Text style={styles.subtitle_footer} >
                La formation d’un architecte s’étale
                sur 5 ans plus 1 an de stage : - Un
                premier cycle d’une durée de 2 ans
                complété par un stage professionnel -
                Un deuxième cycle d’une durée de 3
                ans d’études et une année de stage
                professionnel
                </Text>

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
        height:400,
        width:"95%",
        borderTopRightRadius:100,
        borderTopLeftRadius:100,
        marginLeft:10,
        marginRight:10,
        resizeMode:"contain",

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
    },
      text_btn: {
        fontSize: 18,
        color:'grey',
        fontWeight:'bold',
        textAlign:'center'
      },
});


export default fdIpsas;
