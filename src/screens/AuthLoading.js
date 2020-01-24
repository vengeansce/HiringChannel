import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const AuthLoading = ({navigation: {navigate}}) => {
  useEffect(() => {
    AsyncStorage.getItem('token', (err, res) => {
      if (!err) {
        setTimeout(() => {
          if (res) {
            navigate('Engineers');
          } else {
            navigate('Login');
          }
        }, 1000);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={[s.container]}>
      <Image source={require('../img/logo.png')} style={s.logo} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {width: 150, height: 150},
});

export default AuthLoading;
