import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { useState } from 'react';



function Gouver({item}){

    const [data, setData] = React.useState({
        isSelected:false,
        historySelected:0
    });

  const Selectedfunction = () =>{
  setData({
      isSelected:true,
      historySelected:1
  })
}

const brd = data.isSelected?'#00B0F0': '#fff';

    return(
        <TouchableOpacity style = {styles.gouvernoView} onPress = {Selectedfunction} >
            <Image source = {{uri:item.image}} style= {{height:60, width:60, borderRadius:30, borderWidth:2, borderColor:brd}} />
            <Text style = {styles.nameStyle} >{item.name}</Text>
        </TouchableOpacity>
    )
}


export default class Gouvernorat extends React.Component {
    state = {
      data:[
           {
              "id":'0',
              "image": "https://res.cloudinary.com/dhblms6sm/image/upload/v1616570350/CampusOnline/tunis_bahyor.jpg",
              "name": 'Tunis',
          },
          {
              "id":'1',
              "image": "https://res.cloudinary.com/dhblms6sm/image/upload/v1616575351/CampusOnline/sousse_lkqm4b.jpg",
              "name": 'Sousse',
          },
          {
              "id":'2',
              "image": "https://res.cloudinary.com/dhblms6sm/image/upload/v1616575351/CampusOnline/sfax_xzbiyh.jpg",
              "name": 'Sfax',
          },
          {
              "id":'3',
              "image": "https://res.cloudinary.com/dhblms6sm/image/upload/v1616575351/CampusOnline/Gab%C3%A8s_cogcyp.jpg",
              "name": 'Gabes',
          },
          {
              "id":'4',
              "image": "https://res.cloudinary.com/dhblms6sm/image/upload/v1616575351/CampusOnline/monastir_mf0b0m.jpg",
              "name": 'Monastir',
          },
          {
              "id":'5',
              "image": "https://res.cloudinary.com/dhblms6sm/image/upload/v1616575351/CampusOnline/Bizerte_akxtmk.jpg",
              "name": 'Bizerte',
          },
          {
              "id":'6',
              "image": "https://res.cloudinary.com/dhblms6sm/image/upload/v1616575350/CampusOnline/mahdia_ymwn1n.jpg",
              "name": 'Mahdia',
          },
      ]
    }
  
  
    render(){
      return (
        <View style={styles.container}>
          <FlatList
            horizontal={true}
            data={this.state.data}
            renderItem={({ item }) => <Gouver item={item}/>}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    },
    gouvernoView:{
        flexDirection:'column',
        marginTop:15,
        marginHorizontal:8,
    },
    nameStyle:{
        alignSelf:'center',
        marginBottom:20
    },
  });

