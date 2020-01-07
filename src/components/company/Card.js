import React from 'react';
import {StyleSheet, View, Image, Text as H6} from 'react-native';
import {H3} from 'native-base';
import Modal from 'react-native-modal';

import {API_BASE_URL} from 'react-native-dotenv';

const Card = props => {
  const {
    show,
    backdropPress,
    backButtonPress,
    data: {img, name, description},
  } = props;
  return (
    <View>
      <Modal
        isVisible={show}
        onBackdropPress={backdropPress}
        onBackButtonPress={backButtonPress}>
        <View style={s.container}>
          <View style={s.content}>
            <Image source={{uri: API_BASE_URL + img}} style={s.img} />
            <View style={s.p1}>
              <H3>{name}</H3>
              <H6>{description}</H6>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  p1: {padding: 20},
  content: {
    width: 265,
    backgroundColor: 'white',
  },
  img: {width: '100%', height: 250},
});
export default Card;
