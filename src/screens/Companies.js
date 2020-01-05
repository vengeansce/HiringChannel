import React from 'react';
import {Container, Content} from 'native-base';
import Card from '../components/company/Card';
import Footer from '../components/Footer';

function Companies(props) {
  return (
    <Container>
      <Content padder>
        <Card />
      </Content>
      <Footer active="companys" {...props} />
    </Container>
  );
}

Companies.navigationOptions = {
  header: null,
};

export default Companies;
