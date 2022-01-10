import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar, Dimensions, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


var userType = true // 0=Utilisateur, 1=Client

const {height} = Dimensions.get('screen');

const nameContryMarginTop = (2/8)*height;

const ProfileScreen = () => {
    return (
        <View style = {styles.container}>
        <StatusBar hidden = {true} />
            <View style={styles.header} >
                <Text>Photo de Couverture</Text>
            </View> 
            <TouchableOpacity style={styles.logo}
            >
                <Text>Profile</Text>
            </TouchableOpacity>
            <View style={styles.footer} >
                <View /* bouton views */ style={{flexDirection:'row', justifyContent:'space-between'}} >
                <TouchableOpacity 
                    style={[styles.inscriptionBtn, {backgroundColor:'#00B0F0'}]}
                    onPress={()=>{}}>
                        {userType? <Text> Nouvelle pub </Text>  /* Pour compte client */: 
                        <Text style={styles.textSign}> Mes Candidatures </Text> /* Pour compte utilisateur */}
                </TouchableOpacity>
                
                {userType? <TouchableOpacity  /* Modifier le profile */
                style={[styles.followers,{backgroundColor:'#C1DAE5', borderColor: '#00B0F0',
                borderWidth: 1}]}
                onPress={() => {}}>
                  <View style={styles.icon}>
                  <FontAwesome
                  name='group'
                  size={15}
                  />
                  </View>
                <Text style={styles.followerNumber}>350</Text>
                <Entypo
                name='dot-single'
                size={24}
                color='red'
                />
               </TouchableOpacity> : <TouchableOpacity
               style={[styles.followers, {backgroundColor:'C1DAE5', borderColor: '#00B0F0',
               borderWidth: 1}]}
               onPress={()=>{}}>
                   <Text>Modifier profile</Text>

               </TouchableOpacity> }

                </View>

                <View style = {{flexDirection:'row', justifyContent:'space-between', marginHorizontal:10}}>
                    <TouchableOpacity  /* Apercu */
                        style={[styles.apercu,{backgroundColor:'#fff', borderColor: '#00B0F0',
                        borderWidth: 1}]}
                        onPress={() => {}}>
                    {userType? <Text style={styles.menuTextAAO}>Aperçu</Text> :
                               <Text style={styles.menuTextAAO}>Candidatures</Text> }

                    </TouchableOpacity>   
                    <TouchableOpacity  /* Actualité */
                        style={[styles.actualite,{backgroundColor:'#fff', borderColor: '#00B0F0',
                        borderWidth: 1}]}
                        onPress={() => {}}>
                  
                    <Text style={styles.menuTextAAO}>Actualité</Text>
                    <Entypo
                        name='dot-single'
                        size={24}
                        color='red'
                     />
                    </TouchableOpacity> 
                    <TouchableOpacity  /* Orientation */
                        style={[styles.orientation,{backgroundColor:'#fff', borderColor: '#00B0F0',
                        borderWidth: 1}]}
                        onPress={() => {}}>
                  
                    <Text style={styles.menuTextAAO}>Orientations</Text>
                    <Entypo
                        name='dot-single'
                        size={24}
                        color='red'
                     />
                    </TouchableOpacity>     
                </View>
                <View style = {styles.bar}/>
            </View>
        </View>
    )

};


export default ProfileScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue'
    },
    header:{
        flex:1,
        backgroundColor:'#00B0F0',
        alignItems:'center',
        justifyContent:'center'
    },
    footer:{
        flex:2,
        backgroundColor:'#fff'
    },
    ContryName:{
        color:'#fff',
        fontSize:38,
        fontWeight:'bold',
        right:50,
        bottom:5,
        marginTop:nameContryMarginTop,
        position:'absolute'
    },
    logo:{
        alignItems:'center',
        justifyContent:'center',
        height:80,
        width:80,
        borderRadius:40,
        elevation:10,
        backgroundColor:'grey',
        marginLeft:10,
        position:'absolute',
        top:0.32*height-65
    },
    flagheader:{
        height:90,
        width:90,
        borderRadius:45
    },
    inscriptionBtn:{
        marginTop:55,
        width: '40%',
        height: height*0.05,
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft:20,
        elevation:10
    },
    textSign:{
        color:'#fff',
        alignSelf:'center'
    },
    followers:{
        marginTop:55,
        marginRight:20,
        width: '40%',
        height: height*0.05,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
      },
      apercu:{
        marginTop:20,
        width: '30%',
        height: height*0.05,
        alignItems:'center',
        flexDirection:'row',
        borderRadius: 10,
        justifyContent:'center'
      },
      actualite:{
        marginTop:20,
        width: '30%',
        height: height*0.05,
        flexDirection:'row',
        alignItems:'center',
        borderRadius: 10,
        justifyContent:'center'
      },
      orientation:{
        marginTop:20,
        width: '35%',
        height: height*0.05,
        flexDirection:'row',
        alignItems:'center',
        borderRadius: 10,
        justifyContent:'center',
        alignContent:'center'
      },
      followerNumber: {
        fontSize: 13,
        color:'#000',
      },
      menuTextAAO: {
        fontSize: 13,
        color:'#000',
      },
      icon:{
        marginHorizontal:5
      },
      bar:{
        borderBottomWidth:1,
        borderBottomColor:'#F2F3F4',
        marginHorizontal:7,
        marginTop:10
    
    },
})

