import React from 'react';
import {Text} from 'react-native';
import {Container, Content} from 'native-base';
import Footer from '../components/Footer';

function Employees(props) {
  return (
    <Container>
      <Content>
        <Text>Employees</Text>
      </Content>
      <Footer active="employees" {...props} />
    </Container>
  );
}

Employees.navigationOptions = {
  header: null,
};

export default Employees;
