import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from "../config/colors";

const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");

const fdEseac = () => {

    const data_image = [
        require("../assets/tunisie/1.jpg")
    ]

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
    
            <View style={styles.middle}>
                 <Image
                style={styles.tunisie_flag}
                source={require("../assets/eseac_logo.jpg")}
                 />
                 <View style={styles.in_middle}>
                    <Text style={styles.title} >Filiéres et Débouchées</Text>
                 </View>
            </View>

            <View style = {styles.bar}/>  
                <Image
                style={styles.cover_image}
                    source={require("../assets/Eseac/Eseac45.jpg")}
                />
                <Text style={styles.title_footer} >Licence en droit privé</Text>
                <Text style={styles.subtitle_footer} >
                Métiers visés : Avocat, huissier notaire,
                huissier de justice, traducteur
                assermenté, agent immobilier, courtier
                en bourse, juge judiciaire, juge militaire,
                juge au cour des comptes, conseiller
                juridique.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Eseac/Eseac46.jpg")}
                />
                <Text style={styles.title_footer} >Licence Business Intelligence</Text>
                <Text style={styles.subtitle_footer} >
                Métiers visés : Concepteur,
                développeur, analyste des données,
                business intelligence Analyst, data
                scientist, intégrateur, consultant BI.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Eseac/Eseac47.jpg")}
                />
                <Text style={styles.title_footer} >Licence en Comptabilité</Text>
                <Text style={styles.subtitle_footer} >
                Métiers visés : Auditeur comptable et
                financier, analyste financier, contrôleur
                de gestion, directeur administratif et
                financier, commissaire aux comptes,
                consultant en fusion et acquisition,
                responsable de service comptable,
                responsable de service financier,
                comptable, etc.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Eseac/Eseac48.jpg")}
                />
                <Text style={styles.title_footer} >Licence en Marketing</Text>
                <Text style={styles.subtitle_footer} >
                Métiers visés : Stratège Marketing,
                responsable CRM, web manager,
                community manager, expert en étude
                de marché, créateur d’évènementiel,
                responsable de communication,
                manager de force de vente, responsable
                marketing.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Eseac/Eseac49.jpg")}
                />
                <Text style={styles.title_footer} >Licence en Finance</Text>
                <Text style={styles.subtitle_footer} >
                Métiers visés : Directeur financier,
                auditeur financier, agent financier,
                agent bancaire, conseiller financier,
                agent administratif, etc.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Eseac/Eseac50.jpg")}
                />
                <Text style={styles.title_footer} >Licence en Economie</Text>
                <Text style={styles.subtitle_footer} >
                Métiers visés : Spécialiste
                ordonnancement / approvisionnements
                internationaux, gestion de stocks /
                distribution internationale, opérateur
                transport / douane, gestionnaire
                logistique de projets industriels,
                gestionnaire de financements
                internationaux, spécialiste crédit et
                recouvrement export, gestionnaire
                financier contrats exports, etc.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Eseac/Eseac51.jpg")}
                />
                <Text style={styles.title_footer} >Master en Marketing</Text>
                <Text style={styles.subtitle_footer} >
                Ce master vous permettra de travailler
                au poste de : Directeur marketing,
                conseiller en marketing, responsable
                dans un cabinet de conseil en marketing,
                etc.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Eseac/Eseac52.jpg")}
                />
                <Text style={styles.title_footer} >Master en Comptabilité</Text>
                <Text style={styles.subtitle_footer} >
                Ce master vous permettra de travailler
                au poste de : Expert-comptable,
                comptable agréé, responsable audit
                interne, responsable comptable et de
                control de gestion, conseiller fiscal, etc.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Eseac/Eseac53.jpg")}
                />
                <Text style={styles.title_footer} >Master Sécurité Informatique</Text>
                <Text style={styles.subtitle_footer} >
                Ce master vous permettra de travailler
                au poste de : Expert en Cyber sécurité,
                expert en sécurité des systèmes
                informatiques, expert Auditeur en
                sécurité informatique. Il vous permettra
                également de travailler dans les
                secteurs suivants : Industrie, banques et
                assurances, sociétés de conseil
                informatiques, E-commerce, audit,
                réseaux et télécommunications,
                administration nationales et
                internationales, etc.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Eseac/Eseac54.jpg")}
                />
                <Text style={styles.title_footer} >Master Ingénierie Financière</Text>
                <Text style={styles.subtitle_footer} >
                Ce master vous permettra de travailler
                au poste de : Ingénieur financier,
                analyste financier, crédit manager,
                courtier en bourse, contrôleur de
                gestion, gestionnaire de risque,
                conseiller financier, responsable
                communication financière, trésorier
                d’entreprise, trader, gestionnaire de
                portefeuille, etc.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Eseac/Eseac55.jpg")}
                />
                <Text style={styles.title_footer} >Master Ingénierie Fiscale</Text>
                <Text style={styles.subtitle_footer} >
                Ce master vous permettra de travailler
                au poste de : Directeur comptable,
                juridique et fiscal ; contrôleur ou
                inspecteur des impôts, auditeur juridique
                et fiscal, Assistant fiscal, assistant
                d’expert-comptable ou de commissaire
                aux comptes, contrôleur fiscal, conseiller
                fiscal, etc.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Eseac/Eseac56.jpg")}
                />
                <Text style={styles.title_footer} >Master Management des Affaires</Text>
                <Text style={styles.subtitle_footer} >
                Ce master vous permettra d’accéder aux
                secteurs d’activité suivants : Banque et
                assurance, commerce et distribution,
                communication et médias, management
                des entreprises, etc.
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
    },
      text_btn: {
        fontSize: 18,
        color:'grey',
        fontWeight:'bold',
        textAlign:'center'
      },
});


export default fdEseac;
