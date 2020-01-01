import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Text} from 'react-native';
import {Container, Content, Header, Body, Title} from 'native-base';
import Footer from '../components/Footer';

const Account = props => {
  const {
    navigation: {navigate},
  } = props;
  const getData = async _ => {
    try {
      const id = await AsyncStorage.getItem('id');
      if (id !== null) {
        console.warn(id);
      } else {
        navigate('Login');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  getData();
  return (
    <Container>
      <Header>
        <Body>
          <Title>Account Settings</Title>
        </Body>
      </Header>
      <Content>
        <Text>Account</Text>
      </Content>
      <Footer active="account" {...props} />
    </Container>
  );
};

Account.navigationOptions = {
  header: null,
};

export default Account;
