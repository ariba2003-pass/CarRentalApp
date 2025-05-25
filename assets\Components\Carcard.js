import { EvilIcons, FontAwesome6, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import responsive from '../Components/Responsive';

const Carcard = ({image,name,rating,location,seats,price}) => {
  return (
     <View style={styles.CarContainer}>
  <View style={styles.topHalf}>
  <Image source={image} style={styles.carcardImage}/>
  </View>
  <View style={styles.BottomHalf}>
  <Text style={styles.InsideCarCardBlackText}>{name}</Text>
  <View style={styles.RatingRow}>
  <Text style={styles.RatingNumber}>{rating}</Text>
  <Fontisto name='star' size={12} color="#FF8F3A" />
  </View>
  <View style={styles.LocationRow}>
  <EvilIcons name='location' size={17} color="#767676" />
  <Text style={styles.GreyText}>{location}</Text>
  </View>
  <View style={styles.seatsdollarrow}>
  <View style={styles.SeatsRow}>
  <MaterialCommunityIcons name='sofa-single-outline' size={17} color="#767676" />
  <Text style={styles.RatingNumber}>{seats}</Text>
  </View>
  <View style={styles.DollarRow}>
  <View style={styles.DollarOutline}>
  <FontAwesome6 name="dollar-sign" size={9} color="#767676" />
  </View>
  <Text style={styles.DollarText}>{price}</Text>
  </View>
  </View>
  </View>
      </View>
  )
}

export default Carcard

const styles = StyleSheet.create({
    CarContainer: {
        borderRadius: 12,
        height: responsive.height(230),
        width: responsive.width(161),
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ccc',
       
      },
      topHalf: {
          flex: 1,
          backgroundColor: '#F1F1F1', // Light grey
        },
        carcardImage:{
            height: responsive.height(80),
            width: responsive.width(158),
            marginTop: 12,
          },
        BottomHalf:{
          flex: 1,
          backgroundColor: '#FFFFFF',
          paddingHorizontal: 6,
          gap: 8,
        },
        InsideCarCardBlackText:{
            fontSize: 14,
            fontWeight: '600',
          },
          RatingNumber:{
            fontSize: 12,
            fontWeight: '500',
            color: "#7F7F7F"
          },
          RatingRow:{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          },
          LocationRow: {
            flexDirection: 'row',
            right: 4,
          },
          SeatsRow:{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
          },
          DollarOutline:{
            borderRadius:80,
          borderColor: '#767676',
          borderWidth: 1.2, 
          height: responsive.height(16),
            width: responsive.width(14),
            justifyContent: 'center',
            alignItems: 'center',
          },
          DollarText:{
          fontSize: 12,
          fontWeight:500,
          },
          DollarRow:{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
          },
          seatsdollarrow:{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          },
          GreyText:{
            fontSize: 13,
            fontWeight: '400',
            color: "#7F7F7F"
          },
})
