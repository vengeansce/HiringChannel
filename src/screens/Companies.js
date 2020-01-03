import React from 'react';
import {Text} from 'react-native';
import {Container, Content} from 'native-base';
import Footer from '../components/Footer';

function Companies(props) {
  return (
    <Container>
      <Content>
        <Text>Companies</Text>
      </Content>
      <Footer active="companys" {...props} />
    </Container>
  );
}

Companies.navigationOptions = {
  header: null,
};

export default Companies;
