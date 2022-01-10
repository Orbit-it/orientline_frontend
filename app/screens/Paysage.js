import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import ImageView from "react-native-image-viewing";

function PaysageImage({item}){
    return(
        <View style = {styles.paysageView} >
            <View style = {{justifyContent:'space-between', flexDirection:'row'}} >
                <Image source = {{uri:item.image}} style= {{height:80, width:90, borderRadius:10, margin:5}} />
                <Image source = {{uri:item.image}} style= {{height:80, width:90, borderRadius:10, margin:5}} />
                <Image source = {{uri:item.image}} style= {{height:80, width:90, borderRadius:10, margin:5}} />
            </View>
            <View  style = {{justifyContent:'space-between', flexDirection:'row'}} >
                <Image source = {{uri:item.image}} style= {{height:80, width:90, borderRadius:10, margin:5}} />
                <Image source = {{uri:item.image}} style= {{height:80, width:90, borderRadius:10, margin:5}} />
                <Image source = {{uri:item.image}} style= {{height:80, width:90, borderRadius:10, margin:5}} />
            </View>
           
        </View>
    )
}

/*<ImageView
images={this.state.data}
imageIndex={0}
visible={visible}
onRequestClose={() => setIsVisible(false)}
/>  

  
//const [visible, setIsVisible] = useState(false);

*/




export default class Paysage extends React.Component {
    state = {
      data:[
           {
              "id":'0',
              "image": "https://res.cloudinary.com/dhblms6sm/image/upload/v1616575350/CampusOnline/mahdia_ymwn1n.jpg",
          },
          {
              "id":'1',
              "image": "https://res.cloudinary.com/dhblms6sm/image/upload/v1616575351/CampusOnline/Bizerte_akxtmk.jpg",
          },
          {
              "id":'2',
              "image": "https://res.cloudinary.com/dhblms6sm/image/upload/v1616575351/CampusOnline/sfax_xzbiyh.jpg",
          },
          {
              "id":'3',
              "image": "https://res.cloudinary.com/dhblms6sm/image/upload/v1616575351/CampusOnline/sousse_lkqm4b.jpg",
          },
          {
              "id":'4',
              "image": "https://res.cloudinary.com/dhblms6sm/image/upload/v1616575351/CampusOnline/Gab%C3%A8s_cogcyp.jpg",
          },
          {
              "id":'5',
              "image": "https://res.cloudinary.com/dhblms6sm/image/upload/v1616575351/CampusOnline/monastir_mf0b0m.jpg",
          },
          {
              "id":'6',
              "image": "https://res.cloudinary.com/dhblms6sm/image/upload/v1616570350/CampusOnline/tunis_bahyor.jpg",
          },
      ]
    }
  
  
    render(){
      return (
        <View style={styles.container}>
          <FlatList
            horizontal={true}
            data={this.state.data}
            renderItem={({ item }) => <PaysageImage item={item}/>}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container:{
        flex:2,
        backgroundColor:'#fff'
    },
    paysageView:{
        flexDirection:'column',
        marginHorizontal:5,
    },
    nameStyle:{
        alignSelf:'center',
        
    }
  });

