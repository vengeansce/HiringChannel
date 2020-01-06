import React from 'react';
import {View} from 'react-native';
import {StyleSheet, Image} from 'react-native';

const Card = props => {
  const {img} = props;
  return (
    <View style={s.imgContainer}>
      <Image source={{uri: img}} style={s.img} />
    </View>
  );
};

const s = StyleSheet.create({
  imgContainer: {
    width: '33.33%',
    height: 100,
    padding: 4,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default Card;
