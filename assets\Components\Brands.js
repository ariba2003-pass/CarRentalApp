import { Fontisto } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import responsive from '../Components/Responsive';

const Brands = () => {
  const BrandLogos =
    [
        require('../images/Lambo.png'),
        require('../images/BMW.png'),
        require('../images/Ferrari.png')

    ]
  return (
   
  <View style={styles.Brands}>
  <View style={styles.Tesla}>
  <Fontisto name="tesla" size={30} color="white" />
  </View>
  {BrandLogos.map( (Brand,index)  => (<Image key={index} source={Brand} style={styles.Lambhorgini} Image/>) )}
  </View>
 
  )
}

export default Brands

const styles = StyleSheet.create({
    Tesla:{
        borderRadius:80,
      borderColor: '#D7D7D7',
      borderWidth: 1.5, 
      height: responsive.height(60),
        width: responsive.width(55),
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      },
      Lambhorgini: {
        height: responsive.height(60),
        width: responsive.width(55),
        borderRadius:30,
      },
      Brands: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:10,
      },
})
