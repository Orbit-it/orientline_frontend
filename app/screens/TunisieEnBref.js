import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from "../config/colors";

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');

const TunisieEnBref = () => {

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
                <Text style={styles.title_footer} >La Tunisie en bref</Text>
                <Text style={styles.subtitle_footer} >
                La Tunisie se trouve au cœur de la
                Méditerranée, au confluent du Monde
                arabe, de l’Afrique et de l’Europe.
                Pointant d’un côté vers l’Italie,
                plongeant d’autre part ses racines
                dans les profondeurs du Sahara, la
                Tunisie est par excellence un trait
                d’union entre l’Europe et l’Afrique,
                entre l’Orient et l’Occident.
                </Text>
                <View style = {styles.bar}/>

                <View style={styles.row_value} >
                    <Text style={styles.interline_footer} >Nom officiel</Text>
                    <Text style={styles.interline_value} > République Tunisienne</Text>
                </View>

                <View style = {styles.bar}/>

                <View style={styles.row_value} >
                    <Text style={styles.interline_footer} >Superficie</Text>
                    <Text style={styles.interline_value} >    162.155 km²</Text>
                </View>

                <View style = {styles.bar}/>

                <View style={styles.row_value} >
                    <Text style={styles.interline_footer} >Capitale</Text>
                    <Text style={styles.interline_value} >        Tunis</Text>
                </View>

                <View style = {styles.bar}/>

                <View style={styles.row_value} >
                    <Text style={styles.interline_footer} >Monnaie</Text>
                    <Text style={styles.interline_value} >       Dinar Tunisien (DNT)</Text>
                </View>

                <View style = {styles.bar}/>

                <View style={styles.row_value} >
                    <Text style={styles.interline_footer} >Religion</Text>
                    <Text style={styles.interline_value} >         Islam (minorité {'\n'}         chrétienne et juive)</Text>
                </View>

                <View style = {styles.bar}/>

                <View style={styles.row_value} >
                    <Text style={styles.interline_footer} >Langues</Text>
                    <Text style={styles.interline_value} >        Arabe (langue officielle) {'\n'}        et français </Text>
                </View>

                <View style = {styles.bar}/>

            </View>
                <Image
                style={styles.cover_image}
                    source={require("../assets/Culture.jpg")}
                />
                <Text style={styles.title_footer} >Culture</Text>
                <Text style={styles.subtitle_footer} >
                Résultante naturelle de son parcours
                historique, la Tunisie est un pays
                devenu multiculturel et multilingue. Les
                mouvements migratoires, considérés
                comme une grande opportunité aux
                différentes cultures de se connaître et
                se respecter mutuellement, y sont
                favorisés.
                {'\n'}
                {'\n'}
                Les diversités culturelles et religieuses
                font de la société tunisienne une
                société plus forte et plus dynamique
                comptant plus de 53 000 étrangers,
                d’une multitude de nationalités, qui y
                résident et s’y adaptent facilement.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Gastronomie.jpg")}
                />
                <Text style={styles.title_footer} >Gastronomie</Text>
                <Text style={styles.subtitle_footer} >
                La cuisine tunisienne se distingue par
                l'utilisation importante d'épices et
                d'herbes aromatiques, notamment
                le piment, le safran, le gingembre,
                le cumin, la coriandre, le poivre,
                le curcuma ou le carvi.
                {'\n'}
                {'\n'}
                Les plats se basent essentiellement
                sur les produits locaux : poissons,
                viandes de mouton et bœuf, blé dur et
                tendre ou encore une palette très large
                de fruits et légumes. La base de
                l'alimentation est la semoule, d'où
                le couscous, et les pâtes.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Vie.jpg")}
                />
                <Text style={styles.title_footer} >Vivre en Tunisie</Text>
                <Text style={styles.subtitle_footer} >
                Réputée pour son multiculturalisme, la
                Tunisie est un pays ouvert sur le
                monde. Vivre et travailler en Tunisie
                permet de jouir d´un environnement
                amical et hospitalier et de conditions
                de vie des plus agréables. Ainsi, de
                nombreuses commodités sont offertes
                dans les principales villes du pays.
                {'\n'}
                {'\n'}
                La Tunisie dispose de quartiers
                résidentiels modernes avec des
                logements de standing à coût
                raisonnable et nettement inférieur à
                celui des villes européennes. En effet,
                les loyers en Tunisie sont relativement
                bas et abordables comparativement à
                ceux pratiqués dans les pays voisins.
                Ils varient en fonction des villes et des
                quartiers d’une même ville.
                {'\n'}
                {'\n'}
                D’une manière générale, le visiteur
                étranger est toujours surpris à chaque
                visite de voir sans cesse des
                changements : nouveaux centres
                commerciaux, hypermarchés,
                construction d’immeubles
                ultramodernes, éclosion de nouveaux
                quartiers résidentiels, aménagement
                d’espaces verts. Aussi, ne vous
                étonnez pas de voir ici ou là, des
                travaux en cours. Le pays tout entier
                se modernise avec le charme de la
                Méditerranée.
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
    },
      text_btn: {
        fontSize: 18,
        color:'grey',
        fontWeight:'bold',
        textAlign:'center'
      },
});


export default TunisieEnBref;
