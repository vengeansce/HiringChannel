import React, {useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {View, TextInput} from 'react-native';
import {Container, H1, Text, Button} from 'native-base';

import {getDataStorage} from '../helpers/script';
import s from '../style';

import {API_ENDPOINT} from 'react-native-dotenv';

const Login = props => {
  const {
    navigation: {navigate},
  } = props;
  getDataStorage('token', token => {
    if (token !== null) {
      navigate('Engineers');
    }
  });
  let [user, setUser] = useState('');
  let [password, setPassword] = useState('');
  const storeData = async data => {
    try {
      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('id', data.id);
      await AsyncStorage.setItem('username', data.username);
      await AsyncStorage.setItem('role', data.role);
      navigate('Engineers');
    } catch (err) {
      console.warn(err);
    }
  };
  const loginUser = _ => {
    axios
      .post(`${API_ENDPOINT}login`, {
        user,
        password,
      })
      .then(res => storeData(res.data.values))
      .catch(() => alert('Incorrect username or password.'));
  };
  return (
    <Container style={s.center}>
      <View style={s.container}>
        <H1 style={[s.textCenter, s.header]}>Hiring Channel</H1>
        <View style={s.section}>
          <Text>Username or email</Text>
          <TextInput
            style={s.input}
            placeholder="william"
            value={user}
            onChangeText={text => setUser(text)}
          />
        </View>
        <View style={s.section}>
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="***"
            style={s.input}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={s.section}>
          <Button bordered style={s.center} onPress={loginUser}>
            <Text>Login</Text>
          </Button>
        </View>
        <View style={[s.section, s.register]}>
          <Text>Don't have an account?</Text>
          <Button info transparent onPress={() => navigate('SignUp')}>
            <Text> Sign Up</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

Login.navigationOptions = {
  header: null,
};

export default Login;
