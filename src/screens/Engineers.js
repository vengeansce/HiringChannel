import React from 'react';
import {Container, Content} from 'native-base';

import SearchBar from '../components/engineer/SearchBar';
import Picker from '../components/engineer/Picker';
import Card from '../components/engineer/Card';
import Footer from '../components/Footer';

import {timeConverter} from '../helpers/script';
import {API_BASE_URL} from 'react-native-dotenv';

import RootContext from '../context';

function Engineers(props) {
  const {engineers} = React.useContext(RootContext);
  return (
    <>
      <Container>
        <SearchBar />
        <Content>
          <Picker />
          {engineers.map((elm, i) => (
            <Card
              name={elm.name}
              skills={elm.skills}
              updated={timeConverter(elm.updated)}
              salary={elm.salary}
              img={API_BASE_URL + elm.img}
              key={i}
            />
          ))}
        </Content>
        <Footer active="engineers" {...props} />
      </Container>
    </>
  );
}

Engineers.navigationOptions = {
  header: null,
};

export default Engineers;
