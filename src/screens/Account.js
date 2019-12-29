import React from 'react';
import {Text} from 'react-native';
import {Container, Content} from 'native-base';
import Footer from '../components/Footer';

function Account(props) {
  return (
    <Container>
      <Content>
        <Text>Account</Text>
      </Content>
      <Footer active="account" {...props} />
    </Container>
  );
}

Account.navigationOptions = {
  header: null,
};

export default Account;
