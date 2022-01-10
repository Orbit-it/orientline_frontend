import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from "../config/colors";

const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");

const fdlasall = () => {


    return (
        <SafeAreaView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
    
            <View style={styles.middle}>
                 <Image
                style={styles.tunisie_flag}
                source={require("../assets/lasall_logo.png")}
                 />
                 <View style={styles.in_middle}>
                    <Text style={styles.title} >Filiéres et Débouchées</Text>
                 </View>
            </View>

            <View style = {styles.bar}/>  
                <Image
                style={styles.cover_image}
                    source={require("../assets/Lasalle/01.jpg")}
                />
                <Text style={styles.title_footer} >Comptabilité d'entreprise</Text>
                <Text style={styles.subtitle_footer} >
                Le technicien en comptabilité enregistre et traite des informations relatives aux mouvements financiers d’une entreprise ou d’un service. Il impute les opérations comptables et les enregistre sur des journaux divisionnaires informatisés ou sur papier. Il rend ainsi compte en termes monétaires de l’activité économique de l’entreprise vis-à-vis de la réglementation fiscale ou de la législation sociale du travail (tenue des journaux, des comptes d’exploitation, des livres de paie).
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Lasalle/02.jpg")}
                />
                <Text style={styles.title_footer} >Design graphique et Multimédia</Text>
                <Text style={styles.subtitle_footer} >
                Vous apprendrez à créer un aménagement harmonieux par des techniques sur tables à dessin puis sur ordinateur grâce au logiciel Autocad, une norme dans l’industrie. Le dessin d’observation, le dessin technique et le dessin architectural sont également enseignés dans le programme design d’intérieur du Collège LaSalle de Tunis.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Lasalle/03.jpg")}
                />
                <Text style={styles.title_footer} >Hôtellerie et Tourisme</Text>
                <Text style={styles.subtitle_footer} >
                Le programme Techniques de Gestion hôtelière s’adresse aux personnes qui privilégient les contacts humains et apprécient la mobilité professionnelle. En effet, grâce à cette formation, les diplômés peuvent ensuite travailler en tant qu’hôteliers ou entrepreneurs n’importe où dans le monde. Le programme offre la possibilité aux diplômés d’accéder à une multitude de professions plus intéressantes les unes que les autres. Le contenu enrichissant des cours permet aux étudiants d’apprendre à gérer un hébergement, à organiser un congrès, à contrôler des coûts, à gérer le service alimentaire. De plus, grâce à une expérience pratique composée entre autres d’un stage en milieu hôtelier ou en restauration ainsi que la mise en place d’ateliers de mise en situation, ils seront préparés dans des conditions optimales à l’exercice de la profession.
                {"\n"}
                {"\n"}
                Le tourisme, plus qu’une carrière, une passion.
                {"\n"}
                {"\n"}
                Comme personne compétente, vous travaillerez avec des experts de l’industrie touristique en développant des produits innovateurs pour plusieurs destinations excitantes. Le programme de tourisme traite de produits touristiques et d'événements, en incluant le marketing et la promotion touristique, l'accueil et le service de guide, ainsi que la gestion des ressources financières et humaines. De plus, au cours de votre formation, vous aurez de nombreuses occasions de côtoyer des professionnels lors d’excursions, d’événements confiés par des entreprises et de stages en milieu professionnel. Des activités concrètes ont pour but de vous initier, futur technicien en tourisme, aux réalités du milieu et de vous donner toutes les clés en main pour réussir dans cette industrie passionnante.
                </Text>

                <Image
                style={styles.cover_image}
                    source={require("../assets/Lasalle/04.jpg")}
                />
                <Text style={styles.title_footer} >Réseaux et Sécurité informatique</Text>
                <Text style={styles.subtitle_footer} >
                Le programme BTS Réseaux et sécurité informatique, forme des techniciens capables de concevoir, d’analyser et de dépanner des réseaux informatiques en utilisant plusieurs technologies (multiplateforme).
                {"\n"}
                {"\n"}
                Le technicien sera en mesure d’intervenir à différents stades d’implantation et d’administration d’un réseau local et étendu, et de remplir des fonctions associées de près aux systèmes d’exploitation, aux interconnexions de réseaux et au matériel informatique. De plus, le diplômé en Réseaux et sécurité informatique peut intervenir dans toutes les étapes de la création d’un réseau.
                {"\n"}
                {"\n"}
                Couramment actualisés, les cours de la formation Réseaux et sécurité informatique mènent à un certain nombre de certifications reconnues par le marché du travail, telles que Cisco CCNA.
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


export default fdlasall;
