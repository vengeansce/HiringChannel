import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {StyleSheet, Image} from 'react-native';

const Card = props => {
  const {img, handlePress} = props;
  return (
    <View style={s.imgContainer}>
      <TouchableHighlight onPress={handlePress}>
        <Image source={{uri: img}} style={s.img} />
      </TouchableHighlight>
    </View>
  );
};

const s = StyleSheet.create({
  imgContainer: {
    width: '33.33%',
    height: 110,
    padding: 0.5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default Card;
