import React, { useState, useRef } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  Dimensions
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import colors from "../config/colors";

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');
const SPACING = 10;
const THUMB_SIZE = 80;

const IMAGES = {
  image1: require('../assets/CarousellLasalle/01.jpg'),
  image2: require('../assets/CarousellLasalle/02.jpg'),
  image3: require('../assets/CarousellLasalle/03.jpg'),
  image4: require('../assets/CarousellLasalle/04.jpg'),
  image5: require('../assets/CarousellLasalle/05.jpg'),
  image6: require('../assets/CarousellLasalle/06.jpg'),
  image7: require('../assets/CarousellLasalle/07.jpg'),
  image8: require('../assets/CarousellLasalle/08.jpg')
};

const CarouselImageLasall = () => {

  const [indexSelected, setIndexSelected] = useState(0);

  const onSelect = indexSelected => {
    setIndexSelected(indexSelected);
  };

  const [images, setImages] = useState([
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 },
    { id: '3', image: IMAGES.image3 },
    { id: '4', image: IMAGES.image4 },
    { id: '5', image: IMAGES.image5 },
    { id: '6', image: IMAGES.image6 },
    { id: '7', image: IMAGES.image7 },
    { id: '8', image: IMAGES.image8 }
  ]);


  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <Carousel
        layout='default'
        data={images}
        sliderWidth={width}
        itemWidth={width*0.88}
        onSnapToItem={index => onSelect(index)}
        renderItem={({ item, index }) => (
          <Image
            key={index}
            style={{ width: width*0.85, height: width*0.6, borderRadius:50, resizeMode:"contain", marginTop:2, marginHorizontal:5, justifyContent:'center'}}
            resizeMode='contain'
            source={item.image}
          />
          
        )}
      />
    <Pagination
          inactiveDotColor='gray'
          dotColor={"#00B0F0"}
          activeDotIndex={indexSelected}
          dotsLength={images.length}
          animatedDuration={10}
          inactiveDotScale={0.5}
        />
    </View>
  );
};

export default CarouselImageLasall;